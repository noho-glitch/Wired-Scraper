var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var CommentSchema = new Schema({
  // `title` is of type String
  title: Date,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Note", CommentSchema);

// Export the Note model
module.exports = Comment;