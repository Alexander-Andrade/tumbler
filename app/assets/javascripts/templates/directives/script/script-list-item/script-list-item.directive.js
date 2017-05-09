(function() {
    'use strict';

    angular.module('directives').
    directive('scriptListItem', function () {

        var ctrl = ['$scope', function ($scope) {

        }];

        var directive =  {
            templateUrl: 'directives/script/script-list-item/script-list-item.html',
            scope: {
                script: '='
            },
            replace: true,
            controller: ctrl
        };

        return directive;
    });
}());