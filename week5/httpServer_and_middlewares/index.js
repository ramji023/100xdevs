const express = require("express")
const app = express()




/*
// here we will practice params and query parameters

// addition
app.get("/add", function (req, res) {
    const { a, b } = req.query;
    console.log(a)
    console.log(b)
    if (a && b) {
        return res.send(Number(a) + Number(b))
    }
})
//substraction
app.get("/substraction", function (req, res) {
    const { a, b } = req.query;
    console.log(a)
    console.log(b)
    if (a && b) {
        return res.send(Number(a) - Number(b))
    }
})
// multiply
app.get("/multiplication", function (req, res) {
    const { a, b } = req.query;
    console.log(a)
    console.log(b)
    if (a && b) {
        return res.send(Number(a) * Number(b))
    }
})
// divide 
app.get("/divide", function (req, res) {
    const { a, b } = req.query;
    console.log(a)
    console.log(b)
    if (a && b) {
        return res.send(Number(a) / Number(b))
    }
})
* */

app.listen(3000);