(function() {
    'use strict';

    angular.module('directives').
    directive('areaDeviceItem', function () {

        var ctrl = ['$scope', function($scope){

        }];

        var directive = {
            templateUrl: 'directives/area-device-item/area-device-item.html',
            scope: {
                device: "="
            },
            controller: ctrl
        };

        return directive;
    });
}());