(function() {
    'use strict';

    angular.module('directives').
    directive('dimmerControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);

            // $scope.$watch('control.state', function (newValue, oldValue) {
            //     console.log("is number ?");
            //     console.log(_.isNumber(newValue));
            //     if(!_.isUndefined(oldValue)) {
            //         deviceHelper.sendDeviceChange($scope.control, $scope.device);
            //     }
            // });
            $scope.onHandleUp = function () {
                deviceHelper.sendDeviceChange($scope.control, $scope.device);
            };
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/dimmer-control/dimmer-control.html',
            scope: {
                device: "=",
                control: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());