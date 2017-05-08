(function() {
    'use strict';

    angular.module('directives').
    directive('controlInput', function () {

        var ctrl = ['$scope', function ($scope) {
            $scope.data = {
                value: null
            };
            $scope.$watch('data.value', function (value) {
                $scope.model = value;
            });
        }];

        var directive =  {
            templateUrl: 'directives/script/control-input/control-input.html',
            scope: {
                type: '=',
                model: '=',
            },
            controller: ctrl
        };

        return directive;
    });
}());