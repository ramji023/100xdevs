const jwt = require("jsonwebtoken")

const adminAuth = (req, res, next) => {
    const token = req.headers.token;
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD)
        req.userId = decodedToken.id;
        req.email = decodedToken.email
        next();
    } catch (err) {
        res.status(401).json({ messgae: "something is wrong while verifying your token" })
        return
    }
}

module.exports = { adminAuth }