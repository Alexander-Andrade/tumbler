(function() {
    'use strict';

    angular.module('services').factory('Area', [
        'railsResourceFactory', 'railsSerializer', function(railsResourceFactory, railsSerializer) {
            var resource = railsResourceFactory({
                url: '/areas',
                name: 'area',
                serializer: railsSerializer(function() {
                    this.resource('devices', 'Device');
                    this.exclude('devices');
                })
            });

            resource.defaultArea = function (areas) {
                return _.find(areas, {default: true});
            };

            return resource;
        }
    ]);

}());