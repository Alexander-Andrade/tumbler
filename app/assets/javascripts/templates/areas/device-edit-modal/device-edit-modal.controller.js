(function() {
    'use strict';

    angular.module('controllers').
    controller("deviceEditModalCtrl", [ '$scope','device','close',
        function($scope, device, close) {
            $scope.device = _.cloneDeep(device);

            $scope.close = function(ok) {
                var result = {};
                if(ok){
                    result =  $scope.device;
                }
                close(result, 500);
            };
        }]);

}());