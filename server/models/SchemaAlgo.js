const mongoose = require("mongoose");

const schemaAlgo = mongoose.Schema({
    title: {
        type: String,
        maxLength: 25,
        default: "Problem"
    },
    link: {
        type: String,
        maxLength: 1000,
        default: "https://www.acmicpc.net/"
    },
    level: {
        type: Number,
        default: 0
    },
    probID: {
        type: Number,
        default: 0
    }
})

const SchemaAlgo = mongoose.model("SchemaAlgo", schemaAlgo);
module.exports = { SchemaAlgo };