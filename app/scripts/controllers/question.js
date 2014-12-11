'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
