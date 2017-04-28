(function() {
    'use strict';

    angular.module('services').factory('deviceHelper',[ 'Device','Area', function(Device, Area) {
        var helper = {};


        helper.buildDeviceFromPack = function(pack) {
            var device = _.cloneDeep(pack);

            // give a default unique device name
            device.name = _.lowerCase(device.label) + " " + device.dev_id;

            delete device['type'];
            delete device['changes_packet'];
            delete device['time_stamp'];

            return device;
        };

        helper.createDevice = function(hello_pack, areas) {
            var device = helper.buildDeviceFromPack(hello_pack);

            return new Device(device).create().then(function (response) {
                var defaultArea = Area.defaultArea(areas);
                defaultArea.devices.unshift(response);

                helper.setControlsValues(response, hello_pack.changes_packet);
                return response;
            });
        };

        helper.setControlsValues = function (device, changes_pack) {
            _.forEach(changes_pack.controls, function (changes_control) {
                var dev_control = _.find(device.controls, {ctrl_id: changes_control.ctrl_id});
                if(!_.isUndefined(dev_control)) {
                    dev_control.model = changes_control.state;
                }
            });
        };


        helper.findDeviceById = function (id, areas) {
            var areaLen = areas.length;
            for(var i = 0;i < areaLen; i++){
                var device = _.find(areas[i].devices, {dev_id: id});
                if(!_.isUndefined(device)){
                    return device;
                }
            }
            return undefined;
        };

        helper.applyChanges = function (changes_pack, areas) {
            var device = helper.findDeviceById(changes_pack.dev_id, areas);
            if(!_.isUndefined(device)){
                helper.setControlsValues(device, changes_pack);
            }
        };

        return helper;
    }]);

}());