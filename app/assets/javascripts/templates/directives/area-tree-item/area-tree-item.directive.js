(function() {
    'use strict';

    angular.module('directives').
    directive('areaTreeItem', function () {

        var ctrl = ['$scope', function ($scope) {
        }];

        var directive =  {
            templateUrl: 'directives/area-tree-item/area-tree-item.html',
            replace: true,
            scope: {
                area: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());