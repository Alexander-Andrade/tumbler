(function() {
    'use strict';

    angular.module('directives').
    directive('devStatCard', function () {

        var ctrl = ['$scope', 'deviceInfo', function ($scope, deviceInfo) {
            _.forEach($scope.areas, function(area){
                $scope.$watch(function () {
                    return area.devices.length;
                }, function () {
                    $scope.devices = _.flatMap($scope.areas, function (area) {
                        return area.devices;
                    });
                    console.log($scope.devices);
                });
            });
        }];

        var directive =  {
            templateUrl: 'directives/dev-stat-card/dev-stat-card.html',
            replace: true,
            scope: {
                areas: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());