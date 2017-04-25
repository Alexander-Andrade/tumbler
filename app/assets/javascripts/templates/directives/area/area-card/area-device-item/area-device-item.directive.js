(function() {
    'use strict';

    angular.module('directives').
    directive('areaDeviceItem', function () {

        var ctrl = ['$scope','deviceInfo', function($scope, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/area-device-item.html',
            scope: {
                device: "="
            },
            controller: ctrl
        };

        return directive;
    });
}());