(function() {
    'use strict';

    angular.module('directives').
    directive('wizardNav', function () {

        var directive =  {
            templateUrl: 'directives/script/wizard-nav/wizard-nav.html',
            scope: {
                prev: '&',
                next: '&',
            }
        };

        return directive;
    });
}());