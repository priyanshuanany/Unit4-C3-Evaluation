const mongoose = require("mongoose");
 
const userModel = mongoose.Schema({
     firstName : {type: String, required: true},
     lastName : {type: String, required: false},
     age : {type: Number, required: true},
     email: {type: String, required: true, unique: true},
     profileImages: {type: Array,required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);



module.exports = mongoose.model("user", userModel);


