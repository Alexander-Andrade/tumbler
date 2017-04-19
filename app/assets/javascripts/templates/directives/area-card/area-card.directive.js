(function() {
    'use strict';

    angular.module('directives').
    directive('areaCard', function () {
        var areaCardCtrl = function($scope) {
        };
        areaCardCtrl.$inject = ['$scope'];



        var directive = {
            templateUrl: 'directives/area-card/area-card.html',
            scope: {
                area: '=',
                onDestroy: '&'
            },
            controller: areaCardCtrl
        };

        return directive;
    });
}());