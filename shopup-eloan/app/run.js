(function(){
    'use strict';

    var app = angular.module('eloan');

    app.run(['$rootScope', function($rootScope) {
        $rootScope.lang = 'bn';
    }]);


    // Set some basic stuff in $rootScope so that they can be accessed globally
    // app.run(/* @ngInject */ ['$rootScope', '$state', '$stateParams', '$location', 'amMoment', '$log', function($rootScope, $state, $stateParams, $location, amMoment, $log) {
    //     $rootScope.location = $location;
    //     $rootScope.$state = $state;
    //     $rootScope.$stateParams = $stateParams;

    //     amMoment.changeLocale(window.CONFIG.LANGUAGE);

    //     $rootScope.$on('$stateChangeStart', function(evt, to, params) {
    //         if (to.redirectTo) {
    //             evt.preventDefault();
    //             $state.go(to.redirectTo, params, {location: 'replace'});
    //         }
    //     });

    // }]);


    // // Scroll to top when a state changes
    // app.run(/* @ngInject */ ['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
    //     $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    //         $location.hash();
    //         $anchorScroll();
    //     });
    // }]);

})();

