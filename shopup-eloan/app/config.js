(function(){
    'use strict';

    var app = angular.module('eloan');

    app.config(function ($translateProvider) {
        $translateProvider
        .useStaticFilesLoader({
            prefix: 'dist/locales/',
            suffix: '.json'
        }) 
        // remove the warning from console log by putting the sanitize strategy
        .useSanitizeValueStrategy('sanitizeParameters')    
        .preferredLanguage('bn');
    });


    // app.config(['$translateProvider', function($translateProvider){
    //     //Set up the angular-translate plugin
    //     // $translateProvider.useSanitizeValueStrategy('sanitize');

    //     $translateProvider.useStaticFilesLoader({
    //         prefix: window.CONFIG.STATIC_URL + 'locales/',
    //         suffix: '.json'
    //     });
    //     // $translateProvider.preferredLanguage(window.CONFIG.LANGUAGE);
    //     $translateProvider.preferredLanguage('bn');
    //     $translateProvider.useSanitizeValueStrategy('escape');
    // }]);


    // app.config(['$httpProvider', function($httpProvider) {
    //     $httpProvider.defaults.useXDomain = true;
    //     $httpProvider.defaults.withCredentials = true;
    //     $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //     $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    // }]);

    // app.config(function($rootScopeProvider){
    //     $rootScopeProvider.digestTtl(14);
    // });
})();
