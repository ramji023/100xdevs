const express = require("express")
const courseRoute = express.Router()
const { purchaseModel, coursesModel } = require("../db")
const { userAuth } = require("../middlewares/userAuth")


courseRoute.post("/purchase", userAuth, async function (req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId
    await purchaseModel.create({ userId, courseId })

    res.status(200).json({ msg: "purchase the course successfully" })
})


courseRoute.get("/preview", async function (req, res) {
    const courses = await coursesModel.find({})
    res.json({
        courses,
        message: "preview the courses end point"
    })
})




module.exports = { courseRoute }