const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    id: Number,
    img: [],
    text: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema, "Posts");