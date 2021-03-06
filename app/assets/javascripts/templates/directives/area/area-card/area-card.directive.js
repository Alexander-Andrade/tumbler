(function() {
    'use strict';

    angular.module('directives').
    directive('areaCard', function () {

        var ctrl = ['$scope','Area', function ($scope, Area) {
            $scope.areas = Area.areas;
            $scope.updateName = function (newName) {
                var oldName = $scope.area.name;
                $scope.area.name = newName;
                return $scope.area.update().then(function (response) {
                }).catch(function (response) {
                    $scope.area.name = oldName;
                });
            };
        }];

        var link = function (scope, element, attrs) {
            if (scope.area.default) {
                element.find('.destroy-area').remove();
            }
        };
        link.$inject = ['scope', 'element', 'attrs'];


        var directive = {
            templateUrl: 'directives/area/area-card/area-card.html',
            scope: {
                area: '=',
                onEdit: '&',
                onDestroy: '&',
            },
            link: link,
            controller: ctrl
        };

        return directive;
    }
    );
}());