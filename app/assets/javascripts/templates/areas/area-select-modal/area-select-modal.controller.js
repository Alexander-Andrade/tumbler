(function() {
    'use strict';

    angular.module('controllers').
    controller("areaSelectModalCtrl", [ '$scope','areas','close',
        function($scope, areas, close) {
            $scope.areas = areas;
            $scope.selectedArea = {};

            $scope.close = function(ok) {
                var result = $scope.selectedArea;
                close(result, 500);
            };

            $scope.select = function (area) {
                $scope.selectedArea = area;
            };

            $scope.selected = function (area) {
                return (!_.isEmpty($scope.selectedArea)) ? $scope.selectedArea.id == area.id : false;
            };
        }]);

}());
