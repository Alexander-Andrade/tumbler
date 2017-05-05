(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope', 'Script', 'areas', 'close', 'WizardHandler', 'scriptHelper','controlsInfo',
        function($scope, Script, areas, close, WizardHandler, scriptHelper, controlsInfo) {
        $scope.areas = areas;

        $scope.wizard = function () {
            return WizardHandler.wizard('scripts_wizard');
        };

        $scope.wlist = [
            {
                template: "if {"
            },
            {
                area: null,
                device: null,
                control: null,
                template: "{{area.id}}#{{device.dev_id}}#{{control.ctrl_id}}"
            }
        ];

        $scope.wlist.get = function (i) {
            if(i < 0){
                return this[this.length+i];
            }
            return this[i];
        };


        $scope.beforeCompare = function () {
            var ctrlBundle = $scope.wlist.get(-1);
            var ctrlType = ctrlBundle.control.type.name;

            $scope.wlist.push({
                compList: controlsInfo[ctrlType].comp,
                comp: null,
                template: "{{comp}}"
            });
        };

        $scope.selectInput = function () {
            console.log('input');
            // var ctrlBundle = $scope.wlist.get(-2);
            // var ctrlType = ctrlBundle.control.type.name;
            // $scope.showInput = true;
        };

        $scope.selectControl = function () {
            console.log('control');
            // var ctrlBundle = $scope.wlist.get(-2);
            // $scope.showControl = true;
        };


        $scope.close = function(ok) {
            var result = {};
            // if(ok){
            // }
            close(result, 500);
        };
    }]);

}());
