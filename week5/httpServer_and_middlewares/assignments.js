const express = require("express")

const app = express()


// middlewares

/**
// <-----------------     assignment -1 ------------------>
//count the number of request
let requestCount = 0;
function countRequest(req, res, next) {
    requestCount += 1;
    console.log("request count : ", requestCount);
    req.count = requestCount;
    next();
}
// app.use(countRequest);
app.get('/test', countRequest, (req, res) => {
    console.log("Request count : ==> " + req.count)
    res.send("here is my test route")
})





// <-----------------     Assignment - 2      --------------------->
//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
function secondMiddleware(req, res, next) {

    console.log(`Request method :  ${req.method}`);
    console.log(`Request URL : ${req.url}`);
    console.log(`Request object : ${new Date()}`)
    next();
}
app.use(secondMiddleware);
app.get("/", function (req, res) {
    res.json({ msg: "routing is successfully defined" })
})
 */


app.listen(3001)