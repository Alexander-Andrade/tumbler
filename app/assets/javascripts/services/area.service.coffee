angular.module('services').
factory('Area', ['railsResourceFactory', 'railsSerializer',
  (railsResourceFactory, railsSerializer) ->
    railsResourceFactory({
      url: '/areas',
      name: 'area',
      serializer: railsSerializer(() ->
        this.resource('devices', 'Device');
      )
    })
])