(function() {
    'use strict';

    angular.module('controllers').
    controller("areaModalCtrl", [ '$scope','title','area','close',
        function($scope, title,area,close) {
            $scope.title = title;
            $scope.area = _.cloneDeep(area);

            $scope.close = function(result) {
                if(result){
                    close($scope.area, 500);
                }
            };
    }]);

}());
