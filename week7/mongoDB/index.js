const express = require("express")
const mongoose = require("mongoose")
const app = express()
const { UserModel, TodoModel } = require("./db")
app.use(express.json())
const jwt = require("jsonwebtoken")
const SECRET_KEY = "mYn9a5mei74sr@am"

mongoose.connect("mongodb+srv://ram_ji_mishra_admin:KhA6gs4m5vDvJ35i@cluster0.eplhdws.mongodb.net/todo-app-database");

app.get("/", (req, res) => {
    res.json({ msg: "server is running successfully" })
})

app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;
    await UserModel.create({ email, password, name })
    res.json({ msg: "You are signed up" })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const existedUser = await UserModel.findOne({ email, password })

    if (existedUser) {
        const token = jwt.sign({ id: existedUser._id }, SECRET_KEY)
        res.json({ token: token })
    } else {
        res.status(403).json({ msg: "email is not found" })
    }
})


app.post("/todo", (req, res) => {

})


app.get("/todos", (req, res) => {

})


app.listen(3000)