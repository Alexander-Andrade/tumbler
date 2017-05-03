(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope', 'Script', 'areas', 'close', 'WizardHandler', 'scriptHelper',
        function($scope, Script, areas, close, WizardHandler, scriptHelper) {
        $scope.areas = areas;

        $scope.wizard = {
            models: [new scriptHelper.DevControl(areas)],
            item: 0,

            current: function () {
                return this.models[this.item]
            }
        };

        $scope.wizard = function () {
            return WizardHandler.wizard('scripts_wizard');
        };

        $scope.close = function(ok) {
            var result = {};
            // if(ok){
            // }
            close(result, 500);
        };
    }]);

}());
