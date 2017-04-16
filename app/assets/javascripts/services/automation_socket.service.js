angular.module('services').factory('automationSocket', [
    '$websocket', 'automationServer', function($websocket, automationServer) {
        return automationServer.then(function(response) {
            var stream = $websocket(response.url);
            if(stream){
                stream.onMessage(function(message) {
                    return console.log(message.data);
                });
            }
            return stream;
        });
    }
]);
