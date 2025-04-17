const express = require('express')
const app = express()


app.get("/test", (req, res) => {
    res.send("server is running properly.")
})

app.listen(3000, () => {
    console.log(`http://localhost:${3000}`)
})