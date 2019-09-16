var myApp = angular.module('eloan', ['ngSanitize', 'rzSlider']);

myApp.controller('AppController', function ($scope) {
    $scope.loanAmount = 27000;
    $scope.loanAmountOption = {
        floor: 30000,
        ceil: 300000,
        step: 1000,
        showSelectionBar: true,
        hidePointerLabels: true,
        hideLimitLabels: true,
        ticksArray: [
            30000,
            60000,
            90000,
            120000,
            150000,
            180000,
            210000,
            240000,
            270000,
            300000,
        ]
    };

    $scope.loanDuration = 5;
    $scope.loanDurationOption = {
        floor: 1,
        ceil: 36,
        showSelectionBar: true,
        hidePointerLabels: true,
        hideLimitLabels: true,
        ticksArray: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36]
    };
});

myApp.config(function($rootScopeProvider){
    $rootScopeProvider.digestTtl(14);
});
