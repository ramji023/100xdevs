const express = require("express")
const app = express()


app.get("/", function (req, res) {
    res.json({ msg: "routes defined correctly" })
})


app.use(express.json());  // built in middleware
app.post("/test", function (req, res) {
    console.log(req.body)


    res.json({ msg: "test route successfully running" })
})



app.listen(3002);