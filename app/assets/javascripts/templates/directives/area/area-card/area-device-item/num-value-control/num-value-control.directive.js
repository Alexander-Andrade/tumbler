(function() {
    'use strict';

    angular.module('directives').
    directive('numValueControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/num-value-control/num-value-control.html',
            scope: {
                device: "=",
                control: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());