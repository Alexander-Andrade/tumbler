(function() {
    'use strict';

    angular.module('directives').
    directive('symValueControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/sym-value-control/sym-value-control.html',
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