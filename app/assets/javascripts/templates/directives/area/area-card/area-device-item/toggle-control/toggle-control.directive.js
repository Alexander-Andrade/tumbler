(function() {
    'use strict';

    angular.module('directives').
    directive('toggleControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);

            $scope.onChange = function () {
                deviceHelper.sendDeviceChange($scope.control, $scope.device);
            };
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/toggle-control/toggle-control.html',
            scope: {
                device: "=",
                control: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());