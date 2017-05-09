(function() {
    'use strict';

    angular.module('directives').
    directive('scriptListItem', function () {

        var ctrl = ['$scope', function ($scope) {

            $scope.editName = function () {

            };

            $scope.updateDescription = function (description) {
                var oldDescription = $scope.script.description;
                $scope.script.description = description;
                $scope.script.update().then(function (response) {
                }).catch(function (response) {
                    $scope.script.description = oldDescription;
                });
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