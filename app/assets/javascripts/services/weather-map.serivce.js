(function() {
    'use strict';

    angular.module('services').factory('weatherMap', ['$resource','$http', function($resource, $http) {
            var resource = {};
            resource.APPID = '37b5e7453f611efeb863eb2a05883622';
            resource.cityWeather = function (city) {
                return $http.get('http://api.openweathermap.org/data/2.5/weather',{params:{q: city,
                        APPID: resource.APPID}}).then(function (response) {
                    return response.data;
                });
            };
            return resource;
        }
    ]);

}());