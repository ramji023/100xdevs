const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const SECRET_KEY = "mynameisramjimishra"
const users = []
app.get("/", (req, res) => {
    res.json({ msg: "server is running successfully" })
})

app.use(express.json()) // buit in middleware to parse the body data into json data
app.post("/signup", function (req, res) {
    const { username, password } = req.body;
    if (username && password) {
        users.push({ username, password })
        return res.json({ msg: "you are successfully signed up" })
    } else {
        return res.status(404).json({ msg: "username and password is required" })
    }
})

app.post("/signin", function (req, res) {
    const { username, password } = req.body;
    const existedUser = users.find((user) => user.username === username && user.password === password)
    if (!existedUser) {
        return res.json({ msg: "given data is invalid" })
    }
    const token = jwt.sign({ username: username }, SECRET_KEY)
    return res.json({ msg: token })
})

// auth middleware
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    try {
        const decodedInfo = jwt.verify(token, SECRET_KEY)
        req.username = decodedInfo.username
        next()
    } catch (err) {
        return res.status(401).json({ msg: "token is not valid" })
    }

}
app.get("/me", authMiddleware, function (req, res) {
    const username = req.username;
    const existedUser = users.find((user) => user.username === username)
    return res.json({ username, password: existedUser.password })
})

app.listen(3000);