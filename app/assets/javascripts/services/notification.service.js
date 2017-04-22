(function() {
    'use strict';

    angular.module('services').factory('Notification', [
        'railsResourceFactory', function(railsResourceFactory) {
            var resource = railsResourceFactory({
                url: '/notifications',
                name: 'notifications'
            });

            resource.deleteByOrigin = function (origin) {
                return resource.$delete('/delete_notifications_by_group', {group: origin});
            };

            resource.deleteAll = function () {
                return resource.$delete('/delete_notifications_by_group', {group: 'all'});
            };

            resource.success = function (details) {
                return new resource({
                    type: 'success',
                    details: details,
                    origin: 'user'
                }).create()
            };

            resource.error = function (details) {
                return new resource({
                    type: 'error',
                    details: details,
                    origin: 'user'
                }).create()
            };

            resource.areRead = function (notifications) {
                return _.every(notifications, function (notification) {
                    return notification.read;
                });
            };

            return resource;
        }
    ]);

}());