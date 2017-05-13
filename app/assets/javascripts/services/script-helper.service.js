(function() {
    'use strict';

    angular.module('services').factory('scriptHelper',[ 'Script', 'automationSocket','moment', 'scriptsStat', function(Script, automationSocket, moment, scriptsStat) {
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

        h.sendStop = function (script) {
            automationSocket.then(function (sock) {
                var pack  = h.buildStopPack(script);
                console.log(pack);
                sock.send(pack);
            }).catch(function () {
            });
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

        h.applyChanges = function (pack) {
            var script = Script.find(pack.id);
            script.status = pack.status;
            if(script.status == "stopped"){
                script.start_time = "";
            }
            scriptsStat.update(pack);
        };

        return h;
    }]);

}());