(function() {
    'use strict';

    angular.module('services').factory('controlsInfo', function() {
        var info = {};

        var validDimmerState = function (state, ctrl) {
            return (state >= 0) && (state <= 100);
        };

        var convertToggleStateFromStr = function (state) {
            return (state == 'true');
        };

        var validToggleState = function (state, ctrl) {
            return _.includes([true, false],state);
        };

        var validSymValueState = function (state, ctrl) {
            return _.isString(state);
        };

        var validNumValueState = function (state, ctrl) {
            return _.isNumber(state);
        };

        var validSwitchState = function (state, ctrl) {
            return _.isNumber(state) && (state < ctrl.type.optional.names.length)
        };

        info.dimmer = {
            validate: validDimmerState
        };

        info.toggle = {
            validate: validToggleState,
            convertFromStr: convertToggleStateFromStr,
        };

        info.num_value = {
            validate: validNumValueState
        };

        info.sym_value = {
            validate: validSymValueState
        };

        info.switch_state = {
            validate: validSwitchState
        };

        return info;
    });

}());