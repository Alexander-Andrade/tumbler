(function() {
    'use strict';

    angular.module('directives').
    directive('areaListItem', function () {
            var directive = {
                templateUrl: 'directives/area/area-list-item/area-list-item.html',
                scope: {
                    area: '=',
                    selected: '&'
                },
                replace: true
            };

            return directive;
        }
    );
}());