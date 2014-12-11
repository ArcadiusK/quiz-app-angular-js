var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

var Quiz = require('../models').Quiz;

router.get('/', function (req, res) {
  console.log("get req.body: ", req.body);
  Quiz.find(function(err, questions) {
    res.render('index', {question: questions});
  })
});

router.post('/', function (req,res) {
  console.log("post req.body: ", req.body);
  newQuiz = new Quiz(req.body);
  newQuiz.save(function(err){
  if (err) return next(err);
  res.json(newQuiz);
  })
})





module.exports = router;
