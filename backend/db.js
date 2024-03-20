const mongoose = require("mongoose")

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const modSchema = new mongoose.Schema({
    title: String
})

const todo = mongoose.model("todos",todoSchema)
const mod = mongoose.model("mod",modSchema)

module.exports = {
    todo,
    mod
}