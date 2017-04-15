angular.module('services').
factory('Device', ['railsResourceFactory',
  (railsResourceFactory) ->
    railsResourceFactory({
      url: '/devices',
      name: 'device',
    })
])