const express = require("express")
const mongoose = require("mongoose")
const app = express()
const { UserModel, TodoModel } = require("./db")
app.use(express.json())
const jwt = require("jsonwebtoken")
const { auth, SECRET_KEY } = require("./auth.middleware")

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


app.post("/todo", auth, async (req, res) => {
    const { title, done } = req.body;
    const userId = req.id;
    try {
        await TodoModel.create({ title, done, userId: new mongoose.Types.ObjectId(userId) })
        return res.json({ msg: "todo added successfully" })
    } catch (err) {
        return res.json({ msg: "something went wrong while creating todo" })
    }

})


app.get("/todos", auth, async (req, res) => {
    const userId = req.id;
    try {
        const todos = await TodoModel.find({ userId: new mongoose.Types.ObjectId(userId) })
        return res.json({ todos: todos })
    } catch (err) {
        return res.json({ msg: "couldn't find your todos" })
    }
})



app.listen(3000)