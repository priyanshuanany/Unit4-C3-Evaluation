const mongoose = require("mongoose");

const publicationModel = mongoose.Schema({
    name: {type: String, required: true}
   },
   {
       timestamps: true
   }
);

module.exports = mongoose.model("publication", publicationModel);