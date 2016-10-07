'use strict';
angular.module('app', [])
    .controller('MainCtrl', mainController);



function mainController($scope) {
    $scope.tasks = [];
    $scope.newTask = '';
    $scope.mytext = 'changed'

        

    $scope.addTask = function(msg) {
        $scope.tasks.push(msg);
        console.log("calling add task");
        console.log($scope.tasks);
    }

     

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index,1);
    }







};













