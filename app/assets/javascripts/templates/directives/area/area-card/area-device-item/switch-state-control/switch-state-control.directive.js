(function() {
    'use strict';

    angular.module('directives').
    directive('switchStateControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);

            $scope.switch = function (newState) {
                if($scope.control.state != newState){
                    $scope.control.state = newState;
                    deviceHelper.sendDeviceChange($scope.control, $scope.device);
                }
            };
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/switch-state-control/switch-state-control.html',
            scope: {
                device: "=",
                control: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());