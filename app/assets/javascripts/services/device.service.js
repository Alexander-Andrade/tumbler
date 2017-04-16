angular.module('services').factory('Device', [
    'railsResourceFactory', function(railsResourceFactory) {
        return railsResourceFactory({
            url: '/devices',
            name: 'device'
        });
    }
]);