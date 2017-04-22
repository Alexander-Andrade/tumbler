(function() {
    'use strict';
    angular.module('filters')
        .filter('notificationByOrigin', function() {
            return function(notifications, origin) {
                return _.filter(notifications, {origin: origin});
            };
        });
}());