(function() {
    'use strict';

    angular.module('directives').
    directive('scriptListItem', function () {

        var ctrl = ['$scope','scriptHelper', function ($scope, scriptHelper) {

            $scope.updateName = function (name) {
                var oldName = $scope.script.name;
                $scope.script.name = name;
                $scope.script.update().then(function (response) {
                }).catch(function (response) {
                    $scope.script.description = oldName;
                });
            };

            $scope.updateDescription = function (description) {
                var oldDescription = $scope.script.description;
                $scope.script.description = description;
                $scope.script.update().then(function (response) {
                }).catch(function (response) {
                    $scope.script.description = oldDescription;
                });
            };

            $scope.run = function () {
                scriptHelper.sendStart($scope.script);
            };

            $scope.stop = function () {
                scriptHelper.sendStop($scope.script);
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