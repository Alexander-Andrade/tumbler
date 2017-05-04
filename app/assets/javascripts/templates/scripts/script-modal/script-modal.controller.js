(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope', 'Script', 'areas', 'close', 'WizardHandler', 'scriptHelper','controlsInfo'
        function($scope, Script, areas, close, WizardHandler, scriptHelper, controlsInfo) {
        $scope.areas = areas;

        $scope.tplt = scriptHelper.template();
        // initial first condition
        $scope.tplt.addCondition();

        $scope.wizard = function () {
            return WizardHandler.wizard('scripts_wizard');
        };

        $scope.subject = {
          area: areas[0],
          device: null,
          control: null
        };

        $scope.compareList = [];

        $scope.$watch('subject.area', function (area) {
            $scope.subject.device = area.devices[0];
        });

        $scope.$watch('subject.device', function (device) {
            $scope.subject.control = device.controls[0];
        });

        $scope.beforeCompare = function () {
            $scope.tplt.condDevControl($scope.subject);
            var ctrlType = $scope.subject.control.type.name;
            $scope.tplt.condComp();
            $scope.compareList = controlsInfo[ctrlType].comp;
        };

        $scope.pressCompareButton = function () {
            $scope.tplt
        };



        $scope.close = function(ok) {
            var result = {};
            // if(ok){
            // }
            close(result, 500);
        };
    }]);

}());
