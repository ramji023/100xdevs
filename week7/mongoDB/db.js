const mongoose = require("mongoose")

const schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const User = new schema({
    email: String,
    password: String,
    name: String,
})

const Todo = new schema({
    title: String,
    done: String,
    userId: objectId
})


const UserModel = mongoose.model("users", User)
const TodoModel = mongoose.model("todos", Todo)


module.exports = { UserModel, TodoModel }