(function() {
    'use strict';

    angular.module('directives').
    directive('toggleControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.model = {};

            $scope.$watch('control.state', function(state){
                $scope.model.state = (state == 'on');
            });

            $scope.onChange = function () {
                $scope.control.state = $scope.model.state ? 'on' : 'off';
                deviceHelper.sendDeviceChange($scope.control, $scope.device);
            };
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/toggle-control/toggle-control.html',
            scope: {
                device: "=",
                control: '=',
                updateName: '&'
            },
            controller: ctrl
        };

        return directive;
    });
}());