(function() {
    'use strict';

    angular.module('services').factory('Notif', [
        'railsResourceFactory', function(railsResourceFactory) {
            var resource = railsResourceFactory({
                url: '/notifications',
                name: 'notification'
            });

            resource.deleteAll = function (notifications, origin) {
                if(origin){
                    return resource.$delete('/delete_notifications_by_group', {group: origin}).then(function () {
                        _.remove(notifications, {origin: origin});
                    });
                }else{
                    return resource.$delete('/delete_notifications_by_group', {group: 'all'}).then(function () {
                        notifications.length = 0;
                    });
                }
            };

            resource.success = function (notifications, details, origin) {
                return new resource({
                    category: 'success',
                    details: details,
                    origin: origin,
                    read: false
                }).create().then(function (response) {
                    notifications.unshift(response);
                });
            };

            resource.error = function (notifications, details, origin) {
                return new resource({
                    category: 'error',
                    details: details,
                    origin: origin,
                    read: false
                }).create().then(function (response) {
                    notifications.unshift(response);
                });
            };

            resource.info = function (notifications, details, origin) {
                return new resource({
                    category: 'info',
                    details: details,
                    origin: origin,
                    read: false
                }).create().then(function (response) {
                    notifications.unshift(response);
                });
            };

            resource.areRead = function (notifications) {
                return _.every(notifications, { read: true });
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