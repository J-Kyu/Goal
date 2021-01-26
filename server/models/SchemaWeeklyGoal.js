const mongoose = require("mongoose");

const schemaWeeklyGoal = mongoose.Schema({
    title:{
        type: String,
        maxLength: 50,
        defualt: "This is Weekly Goal."
    },
    algoGoal: {
        type: Number,
        default: 5
    },
    algoProgress: {
        type: Number,
        default: 0
    },
    csGoal: {
        type: Number,
        default: 2
    },
    csProgress: {
        type: Number,
        default: 0
    },
    bookId:{
        type: mongoose.Schema.Types.ObjectId
    },
    bookProgress: {
        type: Number,
        defulat: 0
    }
});

const SchemaWeeklyGoal = mongoose.model("ShcemaWeeklyGoal",schemaWeeklyGoal);
module.exports = { SchemaWeeklyGoal };