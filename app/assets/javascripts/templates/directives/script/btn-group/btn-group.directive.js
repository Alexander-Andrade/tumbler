(function() {
    'use strict';

    angular.module('directives').
    directive('btnGroup', function () {

        var ctrl = ['$scope', function ($scope) {
            $scope.selectedIndex = null;
            $scope.show = true;

            $scope.select = function (item, index) {
                if(!_.isUndefined($scope.onClickList) && !_.isEmpty($scope.onClickList)){
                    $scope.onClickList[index]();
                }
                $scope.model = item;
                $scope.selectedIndex = index;
                if($scope.disapear){
                    $scope.show = false;
                }
            };
        }];

        var directive =  {
            templateUrl: 'directives/script/btn-group/btn-group.html',
            scope: {
                list: '=',
                model: '=',
                selectedIndex: '=',
                disapear: '=',
                onClickList: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());