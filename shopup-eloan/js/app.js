var myApp = angular.module('eloan', ['rzSlider']);

myApp.controller('AppController', function ($scope) {
    $scope.loanAmount = 27000
    $scope.loanDuration = 5
});
