(function() {
    'use strict';

    angular.module('directives').
    directive('devStatMiniCard', function () {

        var ctrl = ['$scope', function ($scope) {
            $scope.formatLabel = function () {
              return _.lowerCase($scope.label);
            };
        }];

        var directive =  {
            templateUrl: 'directives/dev-stat/dev-stat-mini-card/dev-stat-mini-card.html',
            scope: {
                label: '=',
                icon: '=',
                number: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());