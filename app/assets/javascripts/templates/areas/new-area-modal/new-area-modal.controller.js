(function() {
    'use strict';

    angular.module('controllers').
    controller("newAreaModalCtrl", [ '$scope', 'areas','Area','close',
        function($scope, areas,Area,close) {
            $scope.newArea = {};
            $scope.errors = {};


            $scope.close = function(result) {
                if(result){
                    new Area($scope.newArea).create().then(function (response) {
                        console.log(response);
                        areas.push(response);
                        console.log(areas);
                        close(result, 500);
                    },function (response) {
                        $scope.errors = response.data.errors;
                        console.log(response);
                    });
                }
            };
    }]);

}());
