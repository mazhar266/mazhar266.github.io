(function () {
    'use strict';

    angular
        .module('eloan')
        .controller('AppController', ['$scope', function ($scope) {
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
                63750,
                97500,
                131250,
                165000,
                198750,
                232500,
                266250,
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
            ticksArray: [0, 4.5, 9, 13.5, 18, 22.5, 27, 31.5, 36]
        };

        $scope.responsiveRecommend = [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ];

        $scope.responsiveSteps = [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            }
        ];

        // quiz
        $scope.is_quiz_completed = false;
        $scope.is_quiz_failed = false;
        $scope.is_quiz_succeed = false;
        $scope.quiz_step = 1;
        $scope.quiz_style = {
            "width": "0%"
        };

        // the deny button click
        $scope.quizDeny = function() {
            $scope.is_quiz_completed = true;
            $scope.is_quiz_failed = true;
            $scope.is_quiz_succeed = false;
        };

        // the retry button click
        $scope.quizRetry = function() {
            $scope.is_quiz_completed = false;
            $scope.is_quiz_failed = false;
            $scope.is_quiz_succeed = false;
            $scope.quiz_step = 1;

            $scope.quiz_style = {
                "width": "0%"
            };
        };

        // the next button
        $scope.quizNext = function() {
            if ($scope.quiz_step >= 5) {
                $scope.is_quiz_completed = true;
                $scope.is_quiz_failed = false;
                $scope.is_quiz_succeed = true;    
            }
            $scope.quiz_step++;
            $scope.quiz_style = {
                "width": ($scope.quiz_step - 1) * 20 + "%"
            };
        };
    }]);

})();