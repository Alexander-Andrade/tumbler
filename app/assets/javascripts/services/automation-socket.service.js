(function() {
    'use strict';

    angular.module('services').factory('automationSocket', [
        '$websocket', 'automationServer','$window', function($websocket, automationServer, $window) {
            return automationServer.then(function(response) {
                var stream = $websocket(response.url, {reconnectIfNotNormalClose: true, initialTimeout: 500 });
                // var stream = $websocket(response.url);
                if(stream){
                    // stream.onMessage(function(message) {
                    //     console.log(message.data);
                    // });


                    // $window.onbeforeunload = function () {
                    //     stream.reconnectIfNotNormalClose = false;
                    //     stream.close(true);
                    // };
                }

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
