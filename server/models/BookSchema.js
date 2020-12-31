const mongoose = require("mongoose");


const bookSchema = mongoose.Schema({
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

const BookSchema = mongoose.model("BookSchema",bookSchema)
module.exports = { BookSchema }