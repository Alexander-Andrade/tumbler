(function() {
    'use strict';

    angular.module('services').factory('deviceInfo', function() {
        var info = {
            device: {
                lamp: {
                    icon: 'fa  fa-lightbulb-o',
                },
                temperature_sensor: {
                    icon: 'fa fa-asterisk'
                },
                light_sensor: {
                    icon: 'fa fa-lightbulb-o'
                },
                door_sensor: {
                    icon: 'fa fa-key',
                },
                smoke_detector: {
                    icon: 'fa fa-fire-extinguisher'
                },
                water_leakage_sensor: {
                    icon: 'fa fa-tint'
                },
                gas_sensor: {
                    icon: 'fa fa-fire'
                },
                motion_or_sound_sensor: {
                    icon: 'fa fa-volume-up'
                },
                unknown_device: {
                    icon: 'fa fa-question',
                }
            }
        };

        info.infoByLabel = function (label) {
            var dev = info.device[label];
            if(_.isUndefined(dev)){
                dev = info.device.unknown_device;
            }
            return dev;
        };
        return info;
    });

}());