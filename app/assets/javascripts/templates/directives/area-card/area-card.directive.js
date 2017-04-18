(function() {
    'use strict';

    angular.module('directives').
    directive('areaCard', function () {
        return {
            templateUrl: 'directives/area-card/area-card.html',
            scope: {
                area: '='
            },
            transclude: true
        }
    });
}());