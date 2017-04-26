(function() {
    'use strict';

    angular.module('services').factory('automationSocket', [
        '$websocket', 'automationServer','Device','Area', function($websocket, automationServer, Device, Area) {
            return automationServer.then(function(response) {
                var stream = $websocket(response.url, {reconnectIfNotNormalClose: true, initialTimeout: 500 });
                // var stream = $websocket(response.url);
                // $window.onbeforeunload = function () {
                //     stream.reconnectIfNotNormalClose = false;
                //     stream.close(true);
                // };


                stream.createNewDevice = function(pack, areas) {
                    // give a default unique device name
                    var devName = _.lowerCase(pack.label) + " " + pack.dev_id;
                    pack.name = devName;

                    return new Device(pack).create().then(function (response) {
                        var defaultArea = Area.defaultArea(areas);
                        defaultArea.devices.unshift(response);
                    })
                };

                stream.state = function () {
                    return _.findKey(stream._readyStateConstants, function (stateConst) {
                        return stateConst == stream.readyState;
                    });
                };

                return stream;
            });
        }
    ]);

}());
