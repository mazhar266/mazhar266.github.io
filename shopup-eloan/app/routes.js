(function(){

    'use strict';

    var app = angular.module('eloan');
    
    app.config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: '/index.html',
      //   controller: 'BookController',
      })
      .when('/documents', {
        templateUrl: '/documents.html',
      //   controller: 'ChapterController'
      }).otherwise({
        templateUrl: '/404.html',
      });
    });

})();
