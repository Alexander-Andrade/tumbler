(function() {
    'use strict';

    angular.module('services').factory('scriptHelper',[ 'Script', 'automationSocket','moment', 'controlsInfo', function(Script, automationSocket, moment, controlsInfo) {
        var h = {};

        h.buildStartPack = function(script) {
            var pack = {
                type: "user_script",
                time_stamp: moment().format()
            };
            _.assign(pack, script);
            return pack;
        };

        h.sendStart = function (script) {
            automationSocket.then(function (sock) {
                var scriptPack  = h.buildStartPack(script);
                console.log(scriptPack);
                sock.send(scriptPack);
            }).catch(function () {
            });
        };

        h.sendStop = function () {

        };

        h.buildStopPack = function (script) {
            var pack = {
                type: "script_changes",
                name: script.name,
                status: "stopped",
                time_stamp: moment().format()
            };

            return pack;
        };

        return h;
    }]);

}());