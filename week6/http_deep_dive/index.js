const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
app.use(express.json()) // express.json() built in express middleware


let users = []  // in-memory to store username, password and token


const JWT_SECRET = "mynameisramjimishra"

app.get("/", (req, res) => {
    res.send("server is running properly")
})

/* 
 <------------    custom token generation    ---------------->
// generate and  random a 32 sized string 
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
*/


app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    // console.log("username : ", username);
    // console.log("password : ", password);
    if (username && password) {
        users.push({ username, password })
        res.json({ msg: "user signup successfully" })
    } else {
        res.json({ msg: "username and password is required" })
    }
    console.log(users);
})


app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    // console.log("username : ", username);
    // console.log("password : ", password);
    const findUser = users.find((user) => user.username === username);
    if (!findUser) {
        return res.json({ msg: "user is not signed up" })
    }
    if (findUser.password !== password) {
        return res.json({ msg: "password is wrong" })
    }

    // const token = generateToken();
    const token = jwt.sign({ username: username }, JWT_SECRET)  //sign a jwt token
    // findUser.token = token;
    console.log(users);
    return res.json({ message: token })
})



app.get("/me", (req, res) => {
    const token = req.headers.authorization; //jwt token
    console.log(token)
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;

    const findUser = users.find((user) => user.username === username)

    if (findUser) {
        res.json({
            username: findUser.username,
            password: findUser.password
        })
        return;
    } else {
        return res.json({ msg: "token is required" })
    }
})
app.listen(3000);