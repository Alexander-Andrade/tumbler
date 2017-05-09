(function() {
    'use strict';

    angular.module('services').factory('scriptsStat',[ 'Script', function(Script) {
        var stat = {
            running: 0,
            stopped: 0
        };

        stat.calc = function () {
            _.assign(stat, _.countBy(Script.scripts, 'status'))
        };

        stat.update = function (changes_pack) {
            var script = Script.find(changes_pack.id);
            script.status = changes_pack.status;
            stat.calc();
        };

        stat.calc();

        return stat;
    }]);

}());