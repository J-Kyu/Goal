const mongoose = require("mongoose");


const SchemaBook = mongoose.Schema({
    title: {
        type: String,
        maxLength: 50,
        defualt: "Book Name"
    },
    pageNum: {
        type: Number,
        default: 0
    },
    notionLink:{
        type: String,
        maxLenth: 50
    }
})

const SchemaBook = mongoose.model("SchemaBook", schemaBook);
module.exports = { BookSchema };