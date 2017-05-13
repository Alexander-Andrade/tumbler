(function() {
    'use strict';

    angular.module('controllers').
    controller("sheduleModalCtrl", [ '$scope', 'close',
        function($scope, close) {

        $scope.date = null;

            $scope.close = function(ok) {
                var result = {};
                if(ok){
                    result =  $scope.date.format();
                }
                close(result, 500);
            };
    }]);

}());
