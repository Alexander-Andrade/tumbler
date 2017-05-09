(function() {
    'use strict';

    angular.module('controllers').
    controller("deviceSelectModalCtrl", [ '$scope','close',
        function($scope, close) {
            $scope.device = null;

            $scope.close = function(result) {
                if(result){
                    close($scope.device, 500);
                }
            };
    }]);

}());
