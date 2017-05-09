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

            resource.areas = [];

            resource.Create = function (area) {
                return area.create().then(function (response) {
                    response.devices = [];
                    resource.areas.push(response);
                    return response;
                });
            };

            resource.Delete = function (area) {
                return area.delete().then(function (response) {
                    _.remove(resource.areas, { id: area.id });
                    return response;
                });
            };

            resource.default = function () {
                return _.find(resource.areas, {default: true});
            };

            resource.find = function (id) {
                return _.find(resource.areas, {id: id});
            };

            return resource;
        }
    ]);

}());