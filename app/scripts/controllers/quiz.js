'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function ($scope, $http) {

    $http.get('http://localhost:3000/').success(function(data) {
      console.log('get response', data)
      $scope.quiz = data;
    });

    
    setInterval(function() {$scope.arc_seconds--;   
       $scope.$apply();   },800);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 

$scope.quiz = [];

    // $scope.quiz = [
    //   { 
    //     "q": "Who is the best ping pong player at FSA?", 
    //     'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
    //     'answer': "Nimit",
    //     'difficulty': 8,
    //     'answered': false
    //   },
    //   { "q": "Which robot name was chanted during Lego Mindstorms?", 
    //     'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
    //     'answer':'noHope.js',
    //     'difficulty': 5,
    //     'answered': false
    //   },
    //   { 
    //     'q': "Out of the following frontend frameworks, which framework is most rails-like", 
    //     'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
    //     'answer':'Ember.js',
    //     'difficulty': 1,
    //     'answered': false
    //   },
    //   { 
    //     'q': "Which project used a local data store?", 
    //     'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
    //     'answer':'Twitter.js',
    //     'difficulty': 7,
    //     'answered': false
    //   }
    // ];

$scope.addOptionClickFunction = function() {
  $scope.nextQuestion.option_s.push({})
  //console.log("nextQuestion.options: ",$scope.nextQuestion.options)
}


$scope.isLongerThanTen = function($value) {
  console.log("pval: ",$value)
  if ($value===undefined) return false;
  return $value.length>10;
}
    $scope.nextQuestion = {
      option_s: [{}]
    };

    $scope.points = 0;
    $scope.arc_seconds = 13;

    $scope.addQuestionFunction = function() {
      if ($scope.nextQuestion.option_s.length >1 ) {
      // push the newly created question and its options
      $scope.quiz.push($scope.nextQuestion);
      //$http.post('http://localhost:3000/', {stuff: 'otherstuff'})

      $http.post('http://localhost:3000/', $scope.nextQuestion)
        .success(function(data) {
          console.log('post response') 
        })
      // zero out nextQuestion by making a new blank one
      $scope.nextQuestion = {
        option_s: [{}]
      };
    } else {
      alert("Question must have at least 2 options.")
    }
    };

    $scope.checkAnswer = function(question, val) {
      // check if the given val matches the answer

     
      if (!question.answered) {
        question.answered = true;
        if (question.answer === val) {
          $scope.points += 10;
        } else {
          $scope.points -= 10;
        }
      }
    };
  });
