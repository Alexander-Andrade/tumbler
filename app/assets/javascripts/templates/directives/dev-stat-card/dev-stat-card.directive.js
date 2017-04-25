(function() {
    'use strict';

    angular.module('directives').
    directive('devStatCard', function () {

        var ctrl = ['$scope', 'deviceInfo', function ($scope, deviceInfo) {
            // _.forEach($scope.areas, function(area){
            //     $scope.$watch(function () {
            //         return area.devices;
            //     }, function (devices) {
            //
            //         console.log('devices: ');
            //         console.log($scope.devices);
            //     });
            // });

            $scope.$watch('areas', function (areas) {
                $scope.devices = _.flatMap($scope.areas, function (area) {
                    return area.devices;
                });
                $scope.labels = _.uniq(_.map($scope.devices, function (device) {
                   return  device.label;
                }));
                $scope.devNumberByLabel = _.countBy($scope.devices, function(d){return d.label})
            });

            $scope.devIcon = function (label) {
                return deviceInfo.infoByLabel(label).icon;
            };
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