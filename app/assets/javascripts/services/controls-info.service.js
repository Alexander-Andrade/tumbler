(function() {
    'use strict';

    angular.module('services').factory('controlsInfo', function() {
        var info = {};
        var compList = ['=', '!=','<', '>'];

        var validDimmerState = function (state, ctrl) {
            return (state >= 0) && (state <= 100);
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
            validate: validDimmerState,
            comp: compList,
        };

        info.toggle = {
            validate: validToggleState,
            comp: _.without(compList, '<', '>'),
        };

        info.num_value = {
            validate: validNumValueState,
            comp: compList
        };

        info.sym_value = {
            validate: validSymValueState,
            comp: _.without(compList, '<', '>')
        };

        info.switch_state = {
            validate: validSwitchState,
            comp: _.without(compList, '<', '>')
        };

        return info;
    });

}());