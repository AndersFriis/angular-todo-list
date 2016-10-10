'use strict';
angular.module('app', [])
    .controller('MainCtrl', mainController);



function mainController($scope) {
    $scope.tasks = [];
    $scope.newTask = {done: false};
    $scope.mytext = 'changed'
    $scope.order = '-time';

    


        
        
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
    $scope.complete = function(task) {
       task.done = true;  
    }




};













