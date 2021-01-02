const mongoose = require("mongoose");

const schemaYearlyGoal = mongoose.Schema({
    title: {
        type: String,
        maxLength: 50,
        default: "This is Yearly Goal"
    }
})

const SchemaYearlyGoal = mongoose.model("schemaYearlyGoal". SchemaYearlyGoal)
module.exports = { SchemaYearlyGoal }