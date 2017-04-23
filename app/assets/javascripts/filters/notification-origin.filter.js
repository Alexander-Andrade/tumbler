(function() {
    'use strict';
    angular.module('filters')
        .filter('notificationsByOrigin', function() {
            return function(notifications, origin) {
                return _.filter(notifications, {origin: origin});
            };
        });
}());