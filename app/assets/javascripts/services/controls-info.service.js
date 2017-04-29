(function() {
    'use strict';

    angular.module('services').factory('controlsInfo', function() {
        var info = {};

        var validDimmerState = function (state) {
            return (state >= 0) && (state <= 100);
        };

        var validToggleState = function (state) {
            return _.includes([true, false],state);
        };

        var validSymValueState = function (state) {
            return _.isString(state);
        };

        var validNumValueState = function (state) {
            return _.isNumber(state);
        };

        info.dimmer = {
            validate: validDimmerState
        };

        info.toggle = {
            validate: validToggleState
        };

        info.num_val = {
            validate: validNumValueState
        };

        info.sym_val = {
            validate: validSymValueState
        };

        return info;
    });

}());