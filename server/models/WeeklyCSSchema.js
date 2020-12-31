const mongoose = require("mongoose")


const weeklyCSSchema = mongoose.Schema({
    title: {
        type: String,
        maxLenth: 100,
        defulat: "Computer Science Title"
    },
    status:{
        type: Number,
        default: 0
    },
    summary: {
        type: String,
        maxLenth: 1000,
        default: "No Summary Inserted Yet...."
    }
})


const WeeklyCSSchema = mongoose.model("WeeklyCSSchema",weeklyCSSchema)
module.exports = { WeeklyCSSchema }