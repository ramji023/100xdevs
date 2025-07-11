const express = require("express")
const adminRoute = express.Router()
const { adminAuth } = require("../middlewares/adminAuth")
const { adminModel, coursesModel } = require("../db")
const { z } = require("zod")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { JWT_ADMIN_PASSWORD } = require("../config")


adminRoute.post("/register", async function (req, res) {
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

        const existedUser = await adminModel.findOne({ email })
        if (!existedUser) {
            try {
                const hashedPassword = await bcrypt.hash(password, 5)
                await adminModel.create({ email, password: hashedPassword, firstName, lastName })
                res.status(201).json({ message: "New admin successfully created..." })
            } catch (err) {
                res.status(400).json({ message: "something is wrong while creating new admin" })
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



adminRoute.post("/login", async function (req, res) {
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

    const existedUser = await adminModel.findOne({ email: parsedBodyObject.data.email })
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

    const token = jwt.sign({ id: existedUser._id, email: existedUser.email }, JWT_ADMIN_PASSWORD)  // sign the token

    return res.status(200).json({
        token: token,
        message: "Admin is successfully logged in"
    })
})




adminRoute.post("/createCourse", adminAuth, async function (req, res) {
    const adminId = req.userId;
    console.log("admin id is : ", adminId)

    const { title, description, price, imageUrl } = req.body;
    try {
        await coursesModel.create({ title, description, price, imageUrl, creatorId: adminId })
        res.status(201).json({ message: "course is created..." })
    } catch (err) {
        res.status(400).json({ message: "something is wrong while creating course" })
    }
})


adminRoute.put("/updateCourse", adminAuth, async function (req, res) {
    const adminId = req.userId;

    const { title, description, price, imageUrl, courseId } = req.body;
    try {
        await coursesModel.updateOne({ creatorId: adminId, _id: courseId }, { title, description, price, imageUrl })
        return res.status(200).json({ message: "course updated successfully" })
    } catch (err) {
        return res.status(400).json({
            messgae: "something went wrong while updating the course content"
        })
    }
})

adminRoute.get("/courses", adminAuth, async function (req, res) {
    const adminId = req.userId;

    const courses = await coursesModel.find({ creatorId: adminId })
    return res.status(200).json({ courses: courses, message: "fetch all the courses" })
})
module.exports = { adminRoute }