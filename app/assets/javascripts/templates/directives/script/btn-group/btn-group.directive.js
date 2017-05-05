(function() {
    'use strict';

    angular.module('directives').
    directive('btnGroup', function () {

        var ctrl = ['$scope', function ($scope) {
            $scope.selected = null;
            $scope.show = true;

            $scope.select = function (item, index) {
                $scope.model = item;
                $scope.selected = index;
                if($scope.disapear){
                    $scope.show = false;
                }
                if(!_.isUndefined($scope.onClickList) && !_.isEmpty($scope.onClickList)){
                    $scope.onClickList[index]();
                }
            };
        }];

        var directive =  {
            templateUrl: 'directives/script/btn-group/btn-group.html',
            scope: {
                list: '=',
                model: '=',
                disapear: '=',
                onClickList: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());