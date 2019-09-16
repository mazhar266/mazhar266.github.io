var myApp = angular.module('eloan', ['rzSlider']);

myApp.controller('AppController', function () {
    var vm = this;
    vm.loanAmount = 27000
    vm.loanDuration = 5
});

myApp.config(function($rootScopeProvider){
    $rootScopeProvider.digestTtl(14);
});
