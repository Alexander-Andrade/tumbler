(function() {
    'use strict';

    angular.module('directives').
    directive('areaCard', function () {

        var link = function (scope, element, attrs) {
            if (scope.area.default) {
                element.find('.destroy-area').remove();
            }
        };
        link.$inject = ['scope', 'element', 'attrs'];


        var directive = {
            templateUrl: 'directives/area-card/area-card.html',
            scope: {
                area: '=',
                onEdit: '&',
                onDestroy: '&'
            },
            link: link
        };

        return directive;
    }
    );
}());