(function() {
    'use strict';

    angular.module('directives').
    directive('weatherCard', function () {

        var ctrl = ['$scope', 'weatherMap', function ($scope, weatherMap) {
            var geoloc = $scope.automationServer.geolocation;
            weatherMap.cityWeather(geoloc.region_name).then(function (data) {
                $scope.data = data;
                $scope.weather = data.weather[0];
                console.log($scope.data);
            }).catch(function (response) {
                console.log(response);
            });

        }];

        var directive =  {
            templateUrl: 'directives/weather-card/weather-card.html',
            replace: true,
            scope: {
                automationServer: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());