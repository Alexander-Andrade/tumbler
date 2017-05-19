(function() {
    'use strict';

    angular.module('directives').
    directive('devStatMiniCard', function () {
        var directive =  {
            templateUrl: 'directives/dev-stat/dev-stat-mini-card/dev-stat-mini-card.html',
            scope: {
                label: '=',
                icon: '=',
                number: '='
            }
        };

        return directive;
    });
}());