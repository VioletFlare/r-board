const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostsSchema = new Schema(
  {
    id: Number,
    img: [],
    text: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostsSchema);