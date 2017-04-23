(function() {
    'use strict';

    angular.module('directives').
    directive('toaster', function () {

        var ctrl = ['$scope','toaster', function ($scope, toaster) {
            $scope.toasts = toaster.toasts;
        }];

        var directive = {
            templateUrl: 'directives/toaster/toaster.html',
            controller: ctrl
        };

        return directive;
    });
}());