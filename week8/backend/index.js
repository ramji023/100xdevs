require("dotenv").config()
// console.log(process.env.MONGODB_URL)
const express = require("express")
const mongoose = require("mongoose")
const { userRoute } = require("./route/user")
const { courseRoute } = require("./route/courses")
const { adminRoute } = require("./route/admin")
const app = express()

app.use(express.json())  // parse the JSON request body

app.use("/api/v1/user", userRoute)
app.use("/api/v1/courses", courseRoute)
app.use("/api/v1/admin", adminRoute)

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(3000)
    } catch (err) {
        console.log("server is not started...")
    }
}
main()
