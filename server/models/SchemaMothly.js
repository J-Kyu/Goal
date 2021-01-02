const mongoose = require("mongoose");
const SchemaBook = mongoose.model("SchemaBook",schemaBook);

const schemaMonthlyGoal = mongoose.Schema({
    title:{
        type: String,
        maxLength: 50,
        defualt: "This is Monthly Goal."
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

const SchemaMonthlyGoal = mongoose.model("ShcemaMonthlyGoal",schemaMonthlyGoal);
module.exports = { SchemaMonthlyGoal };