(function() {
    'use strict';

    angular.module('directives').
    directive('controlSelect', function () {

        var ctrl = ['$scope', function ($scope) {
            $scope.area = $scope.areas[0];
            console.log("control select !!!");
            $scope.$watch('area', function (area) {
                if(!_.isUndefined(area)) {
                    $scope.device = area.devices[0];
                }
            });

            $scope.$watch('device', function (device) {
                if(!_.isUndefined(device)) {
                    $scope.control = device.controls[0];
                }
            });
        }];

        var directive =  {
            templateUrl: 'directives/script/control-select/control-select.html',
            scope: {
                areas: '=',
                area: '=',
                device: '=',
                control: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());