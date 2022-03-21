const mongoose = require("mongoose");

const commentModel = mongoose.Schema({
    body: {type: String, required: true}
  },
  {
      timestamps: true
  }
);


module.exports = mongoose.model("comment", commentModel);