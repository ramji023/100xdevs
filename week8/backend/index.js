const express = require("express")
const mongoose = require("mongoose")
const { userRoute } = require("./route/user")
const { courseRoute } = require("./route/courses")
const { adminRoute } = require("./route/admin")
const { userModel, adminModel, coursesModel, purchaseModel } = require("./db")

const app = express()

app.use("/api/v1/user", userRoute)
app.use("/api/v1/courses", courseRoute)
app.use("/api/v1/admin", adminRoute)

async function main() {
    try {
        await mongoose.connect("mongodb+srv://ram_ji_mishra_admin:KhA6gs4m5vDvJ35i@cluster0.eplhdws.mongodb.net/udemy-learning-app")
        app.listen(3000)
    } catch (err) {
        console.log("server is not started...")
    }
}
main()
