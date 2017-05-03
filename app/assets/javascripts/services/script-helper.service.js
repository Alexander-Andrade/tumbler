(function() {
    'use strict';

    angular.module('services').factory('scriptHelper',[ 'Script', 'automationSocket', 'controlsInfo', function(Script, automationSocket, controlsInfo) {
        var helper = {};

        helper.templates = [];


        helper.DevControl = function(areas){
            var self = this;
            this.model = {
                area: areas[0],
                device: null,
                control: null
            };

            this.template = function () {
                return Mustache.render("{{model.area.id#model.device.dev_id#model.control.ctrl_id}}", self.model);
            };
        };

        helper.Comp = function(controlType){
            this.controlType = controlType;
            var self = this;

            this.model = {
                list: this.listByControlType(),
                item: null
            };

            this.listByControlType = function () {
                return controlsInfo[self.controlType].comp;
            };
        };

        helper.Input = function(controlType) {
            this.controlType = controlType;
            var self = this;

            // this.model = {
            //     type: ,
            //     value: null
            // };
            //
            // this.inputTypeByCtrlType =

        };

        return helper;
    }]);

}());