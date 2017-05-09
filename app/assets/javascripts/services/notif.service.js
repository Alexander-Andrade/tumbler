(function() {
    'use strict';

    angular.module('services').factory('Notif', [
        'railsResourceFactory', function(railsResourceFactory) {
            var resource = railsResourceFactory({
                url: '/notifications',
                name: 'notification'
            });

            resource.notifs = [];

            resource.deleteAll = function (origin) {
                if(origin){
                    return resource.$delete('/delete_notifications_by_group', {group: origin}).then(function () {
                        _.remove(resource.notifs, {origin: origin});
                    });
                }else{
                    return resource.$delete('/delete_notifications_by_group', {group: 'all'}).then(function () {
                        resource.notifs.length = 0;
                    });
                }
            };

            resource.success = function (details, origin) {
                return new resource({
                    category: 'success',
                    details: details,
                    origin: origin,
                    read: false
                }).create().then(function (response) {
                    resource.notifs.unshift(response);
                });
            };

            resource.error = function (details, origin) {
                return new resource({
                    category: 'error',
                    details: details,
                    origin: origin,
                    read: false
                }).create().then(function (response) {
                    resource.notifs.unshift(response);
                });
            };

            resource.info = function (details, origin) {
                return new resource({
                    category: 'info',
                    details: details,
                    origin: origin,
                    read: false
                }).create().then(function (response) {
                    resource.notifs.unshift(response);
                });
            };

            resource.areRead = function () {
                return _.every(resource.notifs, { read: true });
            };

            resource.filterByOrigin = function (origin) {
                return _.filter(resource.notifs, {origin: origin})
            };

            resource.markReadByGroup = function (group) {
                var filteredNotifs = [];
                if(group != 'all') {
                    filteredNotifs = resource.filterByOrigin(resource.notifs, origin);
                }else{
                    filteredNotifs = resource.notifs;
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