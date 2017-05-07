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
            var ctrlBundle = $scope.wlist.get(-3);
            var ctrlTypeName = ctrlBundle.control.type.name;
            switch (choice.selectedIndex){
                case 0:
                    $scope.wlist.push({
                        ctrlTypeName: ctrlTypeName,
                        value: null,
                        template: "{{value}}"
                    });
                    break;
                case 1:
                    $scope.wlist.push({
                        area: null,
                        device: null,
                        control: null,
                        template: "{{area.id}}#{{device.dev_id}}#{{control.ctrl_id}}"
                    });
                    break;
            }
        };

        $scope.step5 = function () {
            $scope.wlist.push({
                keyWords: ['and', 'or', 'then'],
                keyWord: null,
                template: "{{keyWord}}"
            });
        };

        $scope.step6 = function () {
            var choice = $scope.wlist.get(-1);
            var wizard = $scope.wizard();
            $scope.wlist.push({
                area: null,
                device: null,
                control: null,
                template: "{{area.id}}#{{device.dev_id}}#{{control.ctrl_id}}"
            });
            if(_.includes(['and', 'or'], choice.keyWord)) {
                wizard.goTo(0);
            }
        };
        
        $scope.step7 = function () {
            var ctrlBundle = $scope.wlist.get(-1);
            var ctrlTypeName = ctrlBundle.control.type.name;
            $scope.wlist.push({
                ctrlTypeName: ctrlTypeName,
                value: null,
                template: "{{value}}"
            });
        };

        $scope.step8 = function () {

        };

        $scope.close = function(ok) {
            var result = {};
            // if(ok){
            // }
            close(result, 500);
        };
    }]);

}());
