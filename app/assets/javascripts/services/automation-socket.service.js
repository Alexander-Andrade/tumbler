(function() {
    'use strict';

    angular.module('services').factory('automationSocket', [
        '$websocket', 'automationServer', function($websocket, automationServer) {
            return automationServer.then(function(response) {
                console.log("Automation socket !!!");
                var stream = $websocket(response.url, {reconnectIfNotNormalClose: true, initialTimeout: 500 });
                // var stream = $websocket(response.url);
                // $window.onbeforeunload = function () {
                //     stream.reconnectIfNotNormalClose = false;
                //     stream.close(true);
                // };

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
