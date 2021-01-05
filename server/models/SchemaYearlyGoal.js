const mongoose = require("mongoose");

const schemaYearlyGoal = mongoose.Schema({
    title: {
        type: String,
        maxLength: 50,
        default: "This is Yearly Goal"
    },
    year: {
        type: Number,
        default: 2021
    }
})

const SchemaYearlyGoal = mongoose.model("SchemaYearlyGoal", schemaYearlyGoal);
module.exports = { SchemaYearlyGoal }