(function() {
    'use strict';

    angular.module('directives').
    directive('areaCard',['$document', function ($document) {

        var link = function (scope, element, attrs) {
            if (scope.area.default) {
                $document.find('.destroy-area').remove();
            }
        };
        link.$inject = ['scope', 'element', 'attrs'];


        var directive = {
            templateUrl: 'directives/area-card/area-card.html',
            scope: {
                area: '=',
                onDestroy: '&'
            },
            link: link
        };

        return directive;
    }
    ]);
}());