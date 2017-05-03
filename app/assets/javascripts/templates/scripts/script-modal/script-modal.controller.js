(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope','Script','areas','close','WizardHandler',
        function($scope, Script, areas, close, WizardHandler) {
        $scope.areas = areas;

        $scope.wizard = {
            model: areas[0]
        };
        $scope.showWizard = function () {
            console.log($scope.model);
        };
        $scope.script = {
                name: '',
                code: '',
                description: '',
                started_at: ''
        };

            $scope.close = function(ok) {
                var result = {};
                if(ok){
                    result =  $scope.script;
                }
                close(result, 500);
            };
    }]);

}());
