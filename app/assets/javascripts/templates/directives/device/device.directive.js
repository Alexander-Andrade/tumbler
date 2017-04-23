(function() {
    'use strict';

    angular.module('directives').
    directive('device', function () {

        var ctrl = ['', function(){

        }];

        var directive = {
            templateUrl: 'directives/device/device.html',
            scope: {

            },
            controller: ctrl
        };

        return directive;
    });
}());