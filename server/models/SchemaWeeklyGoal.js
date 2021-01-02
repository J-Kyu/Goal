const mongoose = require("mongoose");
const SchemaBook = mongoose.model("SchemaBook",schemaBook);

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
    csGoal: {
        type: Number,
        default: 2
    },
    bookGoal: [SchemaBook]
});

const SchemaWeeklyGoal = mongoose.model("ShcemaWeeklyGoal",schemaWeeklyGoal);
module.exports = { SchemaWeeklyGoal };