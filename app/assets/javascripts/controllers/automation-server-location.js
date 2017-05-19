(function() {
    'use strict';

    angular.module('controllers').
    controller("locationCtrl", [ '$scope','automationServer',
        function($scope, automationServer) {
        var geolocation = automationServer.geolocation;
        var serverCoords = [geolocation.lat, geolocation.lon];
        $scope.map = {
            center: serverCoords,
            coordinates: serverCoords,
            properties: {
                hintContent: "Automation Server",
                balloonContentHeader: "Automation Server",
                balloonContentBody: Mustache.render("latitude: {{0}}\nlongitude: {{1}}", serverCoords)
            },
            zoom: 10
        };
        }]);
}());