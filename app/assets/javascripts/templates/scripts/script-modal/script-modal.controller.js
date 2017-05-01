(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope','Script','areas','close',
        function($scope, Script,areas,close) {

        $scope.script = {
                name: '',
                code: '',
                description: '',
                started_at: ''
            };



            $scope.close = function(ok) {
                console.log("closing");
                var result = {};
                if(ok){
                    result =  $scope.script;
                }
                close(result, 500);
            };
    }]);

}());
