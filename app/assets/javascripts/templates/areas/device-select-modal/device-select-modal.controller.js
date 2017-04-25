(function() {
    'use strict';

    angular.module('controllers').
    controller("deviceSelectModalCtrl", [ '$scope','areas','close',
        function($scope, areas, close) {
            $scope.device = null;

            $scope.close = function(result) {
                if(result){
                    close($scope.device, 500);
                }
            };
    }]);

}());
