(function() {
    'use strict';

    angular.module('directives').
    directive('scriptsStatCard', function () {

        var ctrl = ['$scope', 'scriptsStat', function ($scope, scriptsStat) {
            $scope.running = scriptsStat.running;
            $scope.stopped = scriptsStat.stopped;
        }];

        var directive =  {
            templateUrl: 'directives/scripts-stat-card/scripts-stat-card.html',
            replace: true,
            scope: {
                scripts: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());