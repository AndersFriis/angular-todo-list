'use strict';
angular.module('app', [])
    .controller('MainCtrl', mainController);



function mainController($scope) {
    $scope.tasks = [];
    $scope.newTask = {msg:"Add Task"};
    $scope.mytext = 'changed'


        
    //add task
    $scope.addTask = function(task) {
        $scope.tasks.push(task);
        //clear input
        $scope.newTask = {}
        
    }

     
    //remove task
    $scope.removeTask = function(index) {
        $scope.tasks.splice(index,1);
    }

    //edit task
    $scope.editTask = function(task) {
        $scope.newTask = task
    }

    //mark task complete




};













