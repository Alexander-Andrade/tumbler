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

            resource.success = function (notifications, details) {
                return new resource({
                    category: 'success',
                    details: details,
                    origin: 'user',
                    read: false
                }).create().then(function (response) {
                    notifications.unshift(response);
                });
            };

            resource.error = function (notifications, details) {
                return new resource({
                    category: 'error',
                    details: details,
                    origin: 'user',
                    read: false
                }).create().then(function (response) {
                    notifications.unshift(response);
                });
            };

            resource.info = function (notifications, details) {
                return new resource({
                    category: 'info',
                    details: details,
                    origin: 'user',
                    read: false
                }).create().then(function (response) {
                    notifications.unshift(response);
                });
            };

            resource.areRead = function (notifications) {
                return _.every(notifications, function (notification) {
                    return notification.read;
                });
            };

            resource.filterByOrigin = function (notifications, origin) {
                return _.filter(notifications, {origin: origin})
            };

            resource.markReadByGroup = function (notifications, group) {
                var filteredNotifs = [];
                if(group != 'all') {
                    filteredNotifs = resource.filterByOrigin(notifications, origin);
                }else{
                    filteredNotifs = notifications;
                }
                var promises = _.map(filteredNotifs, function (notif) {
                    notif.read = true;
                    return notif.update();
                });
                return promises;
            };

            return resource;
        }
    ]);

}());