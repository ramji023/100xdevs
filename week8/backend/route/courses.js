const express = require("express")
const courseRoute = express.Router()



courseRoute.get("/purchase", function (req, res) {
    res.json({
        message: "purchased courses end point"
    })
})


courseRoute.post("/preview", function (req, res) {
    res.json({
        message: "preview the courses end point"
    })
})




module.exports = { courseRoute }