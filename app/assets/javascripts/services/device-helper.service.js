(function() {
    'use strict';

    angular.module('services').factory('deviceHelper',[ 'Device','Area', 'automationSocket', 'moment', 'controlsInfo', function(Device, Area, automationSocket, moment, controlsInfo) {
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

        helper.createDevice = function(hello_pack) {
            var device = helper.buildDeviceFromPack(hello_pack);

            return new Device(device).create().then(function (response) {
                var defaultArea = Area.default();
                defaultArea.devices.unshift(response);

                helper.setControlsValues(response, hello_pack.changes_packet);
                return response;
            });
        };

        helper.convertStateFromStr = function (dev_control, changes_control) {
            var ctrlInfo = controlsInfo[dev_control.type.name];
            if(ctrlInfo.hasOwnProperty('convertFromStr')){
                changes_control.state = ctrlInfo.convertFromStr(changes_control.state);
            }
        };

        helper.checkStateUpdate = function (dev_ctrl, changes_ctrl) {
            return controlsInfo.hasOwnProperty(dev_ctrl.type.name) ?
                controlsInfo[dev_ctrl.type.name].validate(changes_ctrl.state, dev_ctrl) : false;

        };

        helper.setControlsValues = function (device, changes_pack) {
            _.forEach(changes_pack.controls, function (changes_control) {
                var dev_control = _.find(device.controls, {ctrl_id: changes_control.ctrl_id});
                if(!_.isUndefined(dev_control)) {
                    helper.convertStateFromStr(dev_control, changes_control);
                    var valid = helper.checkStateUpdate(dev_control, changes_control);
                    if(valid){

                        dev_control.state = changes_control.state;
                    }else{
                        console.log('wrong state value: '+"id: "+ dev_control.ctrl_id +"name: "+dev_control.type.name + "state: " + changes_control.state);
                    }
                }
            });
        };


        helper.findDeviceById = function (id) {
            var areaLen = Area.areas.length;
            for(var i = 0;i < areaLen; i++){
                var device = _.find(Area.areas[i].devices, {dev_id: id});
                if(!_.isUndefined(device)){
                    return device;
                }
            }
            return undefined;
        };

        helper.applyChanges = function (changes_pack) {
            var device = helper.findDeviceById(changes_pack.dev_id);
            if(!_.isUndefined(device)){
                helper.setControlsValues(device, changes_pack);
            }
        };


        helper.buildChangePackFromDevice = function (control, device) {
          var changes_pack = {
              type: "dev_changes",
              dev_id: device.dev_id,
              controls: [{ctrl_id: control.ctrl_id, state: control.state}],
              time_stamp: moment().format()
          };
           return changes_pack;
        };

        helper.sendDeviceChange = function (control, device) {
            automationSocket.then(function (sock) {
                var changes_pack = helper.buildChangePackFromDevice(control, device);
                console.log(changes_pack);
                sock.send(changes_pack);
            });
        };

        helper.buildDevStatQueryPack = function(device) {
            return {
                type: "dev_statistics_query",
                query_type: "realtime",
                dev_id: device.dev_id,
                time_stamp: moment().format()
            };
        };


        helper.sendDevStatQuery = function(device) {
            automationSocket.then(function (sock) {
                var devStatQueryPack = helper.buildDevStatQueryPack(device);
                console.log(devStatQueryPack);
                sock.send(devStatQueryPack);
            });
        };

        return helper;
    }]);

}());