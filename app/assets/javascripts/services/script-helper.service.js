(function() {
    'use strict';

    angular.module('services').factory('scriptHelper',[ 'Script', 'automationSocket', 'controlsInfo', function(Script, automationSocket, controlsInfo) {
        var helper = {};

        helper.templates = [];


        function DevControl(areas) {
            var self = this;
            this.model = {
                area: areas[0],
                device: null,
                control: null
            };

            this.template = function () {
                return Mustache.render("{{model.area.id#model.device.dev_id#model.control.ctrl_id}}", self.model);
            };
        }

        function Comp(controlType){
            this.controlType = controlType;
            var self = this;

            this.model = {
                list: this.listByControlType(),
                item: null
            };

            this.listByControlType = function () {
                return controlsInfo[self.controlType].comp;
            };
        }

        function Input(controlType) {
            this.controlType = controlType;
            var self = this;

            // this.model = {
            //     type: ,
            //     value: null
            // };
            //
            // this.inputTypeByCtrlType =

        }
        
        
        
        helper.templates.push({
            name: 'ifthen',
            template: "if { ((255.2:55.255#2345#state = on) and (255.111.197#23325#state = 0) ) or (23:ef:sf:sd:fsd#lamp2contr##state = off) } then\
                        begin\
                            tempSensor2.ts2c.turn := on;\
                            lamp3.l3c.turn := on;\
                            selector1.s1c.switch_state_to.[3] := 5;\
                            dimmer1.d1c.dimmer.[25] := 50;\
                        end;\
                        "
        });

        return helper;
    }]);

}());