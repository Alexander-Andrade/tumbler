(function() {
    'use strict';

    angular.module('directives').
      directive('areaCardInfo', function () {
        return {
            templateUrl: 'directives/area-card-info/area-card-info.html',
            scope: {
                nAreas: '=',
                nDevices: '='
            }
        }
    });
}());