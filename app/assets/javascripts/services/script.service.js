(function() {
    'use strict';

    angular.module('services').factory('Script', [
        'railsResourceFactory', function(railsResourceFactory) {
            return railsResourceFactory({
                url: '/scripts',
                name: 'script'
            });
        }
    ]);

}());