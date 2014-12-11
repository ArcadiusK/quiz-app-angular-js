var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
 
var Quiz;
var Schema = mongoose.Schema;
 
var quizSchema = new Schema({
  // question:  String,
  // title: String,
  // url_name: String,
  // owner_id:   String,
  // body:   String,
  // date: { type: Date, default: Date.now },
  // status: Number

  q: String, 
  option_s: Array, //[{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
  answer: String,
  difficulty: Number,
  answered: Boolean
});
  
Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {"Quiz": Quiz};