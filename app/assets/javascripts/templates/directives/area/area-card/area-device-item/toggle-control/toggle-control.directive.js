(function() {
    'use strict';

    angular.module('directives').
    directive('toggleControl', function () {

        var ctrl = ['$scope','deviceInfo', function($scope, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/toggle-control/toggle-control.html',
            scope: {
                device: "="
            },
            replace: true,
            controller: ctrl
        };

        return directive;
    });
}());