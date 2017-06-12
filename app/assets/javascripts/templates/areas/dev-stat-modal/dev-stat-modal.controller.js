(function() {
    'use strict';

    angular.module('controllers').
    controller("devStatModalCtrl", [ '$scope','device', 'close',
        function($scope, device, close) {
            $scope.device = device;


            $scope.close = function(ok) {
                close(ok, 500);
            };

        }]);

}());
