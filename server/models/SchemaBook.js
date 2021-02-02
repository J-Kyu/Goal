const mongoose = require("mongoose");


const schemaBook = mongoose.Schema({
    title: {
        type: String,
        maxLength: 50,
        defualt: "Book Name"
    },
    totalPageNum: {
        type: Number,
        default: 0
    },
    readPageNum:{
        type: Number,
        default: 0 
    },
    thumbnail:{
        type: String
    },
    notionLink:{
        type: String,
        maxLenth: 50
    }
})

const SchemaBook = mongoose.model("SchemaBook", schemaBook);
module.exports = { SchemaBook };