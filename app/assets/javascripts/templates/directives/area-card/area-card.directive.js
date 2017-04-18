(function() {
    'use strict';

    angular.module('directives').
    directive('areaCard', function () {
        var areaCardCtrl = function($scope, Area) {

            $scope.destroyArea = function () {
                var defaultArea = Area.defaultArea($scope.areas);
                _.forEach($scope.area.devices, function (device) {
                    device.areaId = defaultArea.id;
                    device.update();
                });
                defaultArea.devices += $scope.area.devices;
                $scope.area.destroy().then(function (response) {
                    _.remove($scope.areas, function (area) {
                        return area.id == $scope.area.id;
                    });
                    console.log(response);
                },function (response) {
                    console.log(response);
                })
            };

        };
        areaCardCtrl.$inject = ['$scope', 'Area'];



        var directive = {
            templateUrl: 'directives/area-card/area-card.html',
            scope: {
                areas: '=',
                area: '='
            },
            controller: areaCardCtrl
        };

        return directive;
    });
}());