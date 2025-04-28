const jwt = require("jsonwebtoken")
const SECRET_KEY = "mYn9a5mei74sr@am"

//auth middleware function
function auth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.json({ msg: "token is not present" })
    }
    try {
        const decodedInfo = jwt.verify(token, SECRET_KEY)
        if (decodedInfo.id) {
            console.log("type of id : ", typeof decodedInfo.id)
            req.id = decodedInfo.id;
            next()
        }
    } catch (err) {
        return res.status(403).json({ msg: "token is not valid" })
    }
}


module.exports = {
    auth,
    SECRET_KEY
}