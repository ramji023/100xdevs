const express = require("express")
const userRoute = express.Router()
const { userAuth } = require("../middlewares/userAuth")
const { userModel, purchaseModel } = require("../db")
const { z } = require("zod")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { JWT_USER_PASSWORD } = require("../config")


userRoute.post("/register", async function (req, res) {
    const requestBodyObject = z.object({
        email: z.email("Invalid email"),
        password: z.string("password should be string"),
        firstName: z.string("first name should be string"),
        lastName: z.string("last name should be string"),
    })
    const parsedBodyObject = requestBodyObject.safeParse(req.body)
    if (parsedBodyObject.success) {
        const { email, password, firstName, lastName } = parsedBodyObject.data;
        console.log(parsedBodyObject.data)

        const existedUser = await userModel.findOne({ email })
        if (!existedUser) {
            try {
                const hashedPassword = await bcrypt.hash(password, 5)
                await userModel.create({ email, password: hashedPassword, firstName, lastName })
                res.status(201).json({ message: "New User successfully created..." })
            } catch (err) {
                res.status(400).json({ message: "something is wrong while creating new user" })
                return
            }
        } else {
            res.status(400).json({
                message: "Email is already registered"
            })
            return
        }
    } else {
        console.log(parsedBodyObject.error.issues[0].message)
        res.status(400).json({
            message: parsedBodyObject.error.issues[0].message
        })
        return
    }
})

userRoute.post("/login", async function (req, res) {
    const requestBodyObject = z.object({
        email: z.email("Invalid email"),
        password: z.string("Password should be string"),
    })
    const parsedBodyObject = requestBodyObject.safeParse(req.body)
    if (!parsedBodyObject.success) {
        res.status(400).json({
            message: parsedBodyObject.error.issues[0].message
        })
        return
    }

    const existedUser = await userModel.findOne({ email: parsedBodyObject.data.email })
    if (!existedUser) {
        res.status(400).json({
            message: "Email is not registered"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(parsedBodyObject.data.password, existedUser.password)
    // console.log(passwordMatch)
    if (!passwordMatch) {
        res.status(400).json({
            message: "Password is not matched"
        })
        return
    }

    const token = jwt.sign({ id: existedUser._id, email: existedUser.email }, JWT_USER_PASSWORD)  // sign the token

    return res.status(200).json({
        token: token,
        message: "User is successfully logged in"
    })
})


userRoute.get("/allCourses", userAuth, async function (req, res) {
    const userId = req.userId;
    const courses = await purchaseModel.find({ _id: userId })
    res.json({
        courses,
        message: "all courses end point"
    })
})


module.exports = { userRoute }