var mongoose = require("mongoose");

const Book = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    authors:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    },
    link:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Book", Book);