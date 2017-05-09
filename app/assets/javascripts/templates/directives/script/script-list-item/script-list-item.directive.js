(function() {
    'use strict';

    angular.module('directives').
    directive('scriptListItem', function () {

        var ctrl = ['$scope', function ($scope) {

            $scope.editName = function () {

            };

            $scope.editDescription = function () {

            };
        }];

        var directive =  {
            templateUrl: 'directives/script/script-list-item/script-list-item.html',
            scope: {
                script: '=',
                destroy: '&'
            },
            replace: true,
            controller: ctrl
        };

        return directive;
    });
}());