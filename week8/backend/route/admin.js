const express = require("express")
const adminRoute = express.Router()
const {adminAuth} = require("../middlewares/adminAuth")



adminRoute.post("/register", function (req, res) {
    res.json({
        message: "admin register end point"
    })
})

adminRoute.post("/login", function (req, res) {
    res.json({
        message: "amdin login end point"
    })
})

adminRoute.post("/createCourse", function (req, res) {
    res.json({
        message: "create course end point"
    })
})

adminRoute.put("/updateCourse", function (req, res) {
    res.json({
        message: "update course end point"
    })
})

adminRoute.get("/courses", function (req, res) {
    res.json({
        message: "get all courses end point"
    })
})
module.exports = { adminRoute }