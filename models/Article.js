var mongoose = require("mongoose");

//unique validator
var uniqueValidator = require('mongoose-unique-validator');


// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true,
    unique: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true,
    unique: true
  },
  img: {
  type: String
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
})
ArticleSchema.plugin(uniqueValidator);

var Article = mongoose.model("Article", ArticleSchema)

module.exports = Article;