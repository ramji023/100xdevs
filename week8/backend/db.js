const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})



const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: "Admin"
    }
})

const purchaseSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: "Courses"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const userModel = mongoose.model("User", userSchema)
const adminModel = mongoose.model("Admin", adminSchema)
const coursesModel = mongoose.model("Courses", courseSchema)
const purchaseModel = mongoose.model("Purchase", purchaseSchema)

module.exports = { userModel, adminModel, coursesModel, purchaseModel }