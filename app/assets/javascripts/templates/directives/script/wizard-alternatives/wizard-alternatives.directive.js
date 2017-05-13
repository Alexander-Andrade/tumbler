(function() {
    'use strict';

    angular.module('directives').
    directive('wizardAlternatives', function () {

        var ctrl = ['$scope', function ($scope) {
            $scope.selectedIndex = null;

            $scope.select = function (item, index) {
                $scope.model = item;
                $scope.selectedIndex = index;
            };
        }];

        var directive =  {
            templateUrl: 'directives/script/wizard-alternatives/wizard-alternatives.html',
            scope: {
                list: '=',
                model: '=',
                selectedIndex: '=',
            },
            controller: ctrl
        };

        return directive;
    });
}());