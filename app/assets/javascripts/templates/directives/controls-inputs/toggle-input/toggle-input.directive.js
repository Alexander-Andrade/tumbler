(function() {
    'use strict';

    angular.module('directives').
    directive('dimmerInput', function () {

        var directive = {
            templateUrl: 'directives/controls-inputs/dimmer-input.html',
            scope: {
                model: '='
            },
        };

        return directive;
    });
}());