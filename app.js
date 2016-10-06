'use strict';
angular.module('app', [])
    .controller('MainCtrl', mainController);



function mainController($scope) {
    $scope.tasks = [
        
        $scope.newTask =  {
        addTask: '',
        





$scope.addTask = function () {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
    }