(function() {
    'use strict';

    angular.module('directives').
    directive('numValueControl', function () {

        var ctrl = ['$scope', 'deviceHelper','deviceInfo', function($scope, deviceHelper, deviceInfo){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);

            $scope.data = [{}];
            $scope.config = $scope.control.type.optional;
            console.log($scope.control);
            console.log($scope.config);
            $scope.columns = [
                {
                    "id": $scope.control.name,
                    "type": "gauge"
                }
            ];
            console.log($scope.control.min);
            $scope.$watch('control.state', function (state) {
                $scope.data[0][$scope.control.name] = state;
            });

            $scope.format = function (value, ratio) {
                return value;
            }
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/num-value-control/num-value-control.html',
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