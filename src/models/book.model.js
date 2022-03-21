const mongoose = require("mongoose");


const bookModel = mongoose.Schema({
    likes : {type: Number},
    coverImage : {type: String, required: true},
    content : {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("book", bookModel);