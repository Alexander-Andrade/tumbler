(function() {
    'use strict';

    angular.module('controllers').
    controller("devStatCtrl", [ '$scope', 'deviceInfo','Area',
        function($scope, deviceInfo, Area) {
            $scope.areas = Area.areas;
            _.forEach($scope.areas, function(area){
                $scope.$watch(function () {
                    return area.devices.length;
                }, function (length) {
                    $scope.devices = _.flatMap($scope.areas, function (area) {
                        return area.devices;
                    });
                    $scope.labels = _.uniq(_.map($scope.devices, function (device) {
                        return  device.label;
                    }));

                    $scope.devNumberByLabel = _.countBy($scope.devices, function(d){return d.label})
                });
            });

            $scope.devIcon = function (label) {
                return deviceInfo.infoByLabel(label).icon;
            };
        }]);
}());