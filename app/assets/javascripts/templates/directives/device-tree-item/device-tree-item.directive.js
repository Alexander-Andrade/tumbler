(function() {
    'use strict';

    angular.module('directives').
    directive('deviceTreeItem', function () {

        var ctrl = ['$scope', function ($scope) {
        }];

        var directive =  {
            templateUrl: 'directives/device-tree-item/device-tree-item.html',
            replace: true,
            scope: {
                device: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());