(function() {
    'use strict';

    angular.module('directives').
    directive('automationServerCard', function () {

        var ctrl = ['$scope','moment', '$interval', function ($scope, moment, $interval) {
            var geoloc = $scope.automationServer.geolocation;
            $scope.country = geoloc.country;
            $scope.regionName = geoloc.region_name;
            $scope.timezone = geoloc.timezone;
            $scope.url = $scope.automationServer.url;
            $scope.$watch('autoServSock.readyState', function (stateNum) {
                $scope.connection = _.lowerCase($scope.autoServSock.state());
            });

            $interval(function () {
                $scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
            }, 1000);
        }];

        var directive =  {
            templateUrl: 'directives/automation-server-card/automation-server-card.html',
            replace: true,
            scope: {
                automationServer: '=',
                autoServSock: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());