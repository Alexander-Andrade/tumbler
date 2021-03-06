(function() {
    'use strict';

    angular.module('directives').
    directive('numValueControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo','$timeout','$element', function($scope, deviceHelper, deviceInfo, $timeout, $element){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);

            $scope.data = [{}];

            $scope.config = $scope.control.type.optional;
            $scope.data[0][$scope.control.name] = $scope.config.min;
            $scope.columns = [
                {
                    "id": $scope.control.name,
                    "type": "gauge"
                }
            ];

            $scope.$watch('control.state', function (state) {
                $scope.data[0][$scope.control.name] = state;
            });

            $scope.format = function (value, ratio) {
                return value;
            };
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/num-value-control/num-value-control.html',
            scope: {
                device: "=",
                control: '=',
                updateName: '&',
                visible: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());