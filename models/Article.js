var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: "Title required"
  },
  priority: {
    type: Number,
    required: "Number required"
  },
  notes :{
    type: String,
    required: "Notes required"
  }
});

var Post = mongoose.model('Posts', postSchema)
module.exports = Post;