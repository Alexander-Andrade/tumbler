(function() {
    'use strict';

    angular.module('services').factory('Notification', [
        'railsResourceFactory', function(railsResourceFactory) {
            var resource = railsResourceFactory({
                url: '/notifications',
                name: 'notifications'
            });

            resource.deleteByOrigin = function (origin) {
                return resource.$delete('/notifications', {group: origin});
            };

            resource.deleteAll = function () {
                return resource.$delete('/notifications', {group: 'all'});
            };

            return resource;
        }
    ]);

}());