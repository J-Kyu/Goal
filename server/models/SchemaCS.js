const mongoose = require("mongoose");


const schemaCS = mongoose.Schema({
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


const SchemaCS = mongoose.model("SchemaCS",schemaCS);
module.exports = { SchemaCS };