(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope', 'Script', 'areas', 'close', 'WizardHandler', 'scriptHelper','controlsInfo',
        function($scope, Script, areas, close, WizardHandler, scriptHelper, controlsInfo) {
        $scope.areas = areas;

        $scope.wizard = function () {
            return WizardHandler.wizard('scripts_wizard');
        };

        $scope.wlist = [];
        $scope.wlist.get = function (i) {
            if(i < 0){
                return this[this.length+i];
            }
            return this[i];
        };

        $scope.step1 = function () {
            $scope.wlist.push({
                template: "if {"
            });

            $scope.wlist.push({
                area: null,
                device: null,
                control: null,
                template: "{{area.id}}#{{device.dev_id}}#{{control.ctrl_id}}"
            });
        };

        $scope.step1();

        $scope.step2 = function () {
            var ctrlBundle = $scope.wlist.get(-1);
            var ctrlType = ctrlBundle.control.type.name;

            $scope.wlist.push({
                compList: controlsInfo[ctrlType].comp,
                comp: null,
                template: "{{comp}}"
            });
        };

        $scope.step3 = function () {
            $scope.wlist.push({
                inputTypesList: ['value from input', 'value from device control'],
                selectedIndex: null
            });
        };
        
        $scope.step4 = function () {
            var choice = $scope.wlist.get(-1);
            switch (choice.selectedIndex){
                case 0:
                    var ctrlBundle = $scope.wlist.get(-3);
                    var ctrlType = ctrlBundle.control.type.name;
                    break;
                case 1:
                    var ctrlBundle = $scope.wlist.get(-3);
                    break;
            }
        };

        $scope.close = function(ok) {
            var result = {};
            // if(ok){
            // }
            close(result, 500);
        };
    }]);

}());
