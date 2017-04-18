(function() {
    'use strict';

    angular.module('services').factory('automationSocket', [
        '$websocket', 'automationServer','$window', function($websocket, automationServer, $window) {
            return automationServer.then(function(response) {
                var stream = $websocket(response.url, {reconnectIfNotNormalClose: true, initialTimeout: 500 });

                if(stream){
                    // stream.onMessage(function(message) {
                    //     console.log(message.data);
                    // });

                    // stream.onMessage(function(message) {
                    //     console.log(message.data);
                    // });

                    $window.onbeforeunload = function () {
                        stream.reconnectIfNotNormalClose = false;
                        stream.close(true);
                    };

                    stream.onClose(function() {
                        console.log(connectionStateName());
                    });
                    stream.onError(function () {
                        console.log(connectionStateName());
                    });

                    var connectionStateName = function(stateValue) {
                        return _.findKey(stream._readyStateConstants, stream.readyState);
                    }
                }
                return stream;
            });
        }
    ]);

}());
