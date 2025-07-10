const express = require("express")
const userRoute = express.Router()
const { userAuth } = require("../middlewares/userAuth")

userRoute.post("/register", function (req, res) {
    res.json({
        message: "register end point"
    })
})

userRoute.post("/login", function (req, res) {
    res.json({
        message: "login end point"
    })
})

userRoute.get("/allCourses", function (req, res) {
    res.json({
        message: "all courses end point"
    })
})


module.exports = { userRoute }