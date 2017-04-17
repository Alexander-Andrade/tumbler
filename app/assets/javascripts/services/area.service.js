(function() {
    'use strict';

    angular.module('services').factory('Area', [
        'railsResourceFactory', 'railsSerializer', function(railsResourceFactory, railsSerializer) {
            return railsResourceFactory({
                url: '/areas',
                name: 'area',
                serializer: railsSerializer(function() {
                    this.resource('devices', 'Device');
                    this.exclude('devices');
                })
            });
        }
    ]);

}());