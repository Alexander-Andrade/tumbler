(function() {
    'use strict';

    angular.module('directives').
    directive('weatherInput', function () {

        var ctrl = ['$scope', function ($scope) {
        }];

        var directive =  {
            templateUrl: 'directives/script/weather-input/weather-input.html',
            scope: {
                temperature: '=',
                humidity: '=',
                pressure: '=',
                enableTemp: '=',
                enableHumid: '=',
                enablePressure: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());