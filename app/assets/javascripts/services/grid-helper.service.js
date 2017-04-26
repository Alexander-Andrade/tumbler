(function() {
    'use strict';

    angular.module('services').factory('greedHelper', function() {
        var helper = {};

        helper.range = function (max, step) {
            var input = [];
            for (var i = 0; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };

        return helper;
    });

}());