(function() {
    'use strict';

    angular.module('services').factory('scriptsStat',[ 'Script', function(Script) {
        var stat = {};
        stat.scripts = [];
        stat.nRunning = 0;
        stat.nStopped = 0;

        stat.init = function (scripts) {
            stat.scripts = scripts;

            var self = this;
            _.forEach(stat.scripts, function (script) {
                if(script.status=='running'){
                    self.nRunning++;
                }else if(script.status=='stopped'){
                    stat.nStopped++;
                }
            });
        };

        stat.addToRunning = function () {
            stat.nRunning++;
            stat.nStopped = stat.scripts.length - stat.nRunning;
        };

        stat.addToStopped = function () {
            stat.nStopped++;
            stat.nRunning = stat.scripts.length - stat.nStopped;
        };

        return stat;
    }]);

}());