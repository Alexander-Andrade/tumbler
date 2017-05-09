(function() {
    'use strict';

    angular.module('services').factory('Script', [
        'railsResourceFactory', function(railsResourceFactory) {
            var resource = railsResourceFactory({
                url: '/scripts',
                name: 'script'
            });

            resource.scripts = [];

            resource.Create = function (script) {
                return script.create().then(function (response) {
                    resource.scripts.unshift(response);
                    return response;
                });
            };

            resource.Delete = function (script) {
                return script.delete().then(function (response) {
                    _.remove(resource.scripts, { id: script.id });
                    return response;
                });
            };

            resource.find = function (id) {
                return _.find(resource.scripts, {id: id});
            };

            return resource;
        }
    ]);

}());