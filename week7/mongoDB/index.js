const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const app = express()
const { UserModel, TodoModel } = require("./db")
app.use(express.json())
const jwt = require("jsonwebtoken")
const { auth, SECRET_KEY } = require("./auth.middleware")
const { z } = require("zod");


mongoose.connect("mongodb+srv://ram_ji_mishra_admin:KhA6gs4m5vDvJ35i@cluster0.eplhdws.mongodb.net/todo-app-database");

app.get("/", (req, res) => {
    res.json({ msg: "server is running successfully" })
})

app.post("/signup", async (req, res) => {
    const requestBodyObject = z.object({
        email: z.string().email(),
        password: z.string(),
        name: z.string(),
    })
    const parsedBodyObject = requestBodyObject.safeParse(req.body);
    if (!parsedBodyObject.success) {
        console.log(parsedBodyObject)
        return res.json({ msg: "Incorrect input data" })
    }
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log("hashed password is  : ", hashedPassword)
    await UserModel.create({ email, password: hashedPassword, name })
    res.json({ msg: "You are signed up" })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const existedUser = await UserModel.findOne({ email })
    if (!existedUser) {
        return res.json({ msg: "User is not in the data base" })
    }

    const passwordMatch = await bcrypt.compare(password, existedUser.password)
    console.log(passwordMatch)
    if (passwordMatch) {
        const token = jwt.sign({ id: existedUser._id }, SECRET_KEY)
        res.json({ token: token })
    } else {
        res.status(403).json({ msg: "Password is not correct" })
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