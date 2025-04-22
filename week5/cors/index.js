const express = require("express")
const app = express()

//cors middleware
const cors = require("cors");
app.use(cors());



app.use(express.json())
app.post("/sum", function (req, res) {
    const { a, b } = req.body

    res.json({ ans: parseInt(a) + parseInt(b) })
})

app.listen(3002)