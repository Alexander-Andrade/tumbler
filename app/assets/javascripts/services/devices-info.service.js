(function() {
    'use strict';

    angular.module('services').factory('deviceInfo', function() {
        var info = {
            device: {
                lamp: {
                    icon: 'ion-ios-lightbulb',
                    control: {
                        toggle: {
                            onn: 'ion-ios-lightbulb-outline',
                            off: 'ion-ios-lightbulb'
                        }
                    }
                },
                temperature_sensor: {
                    icon: 'ion-thermometer'
                },
                light_sensor: {
                    icon: 'fa fa-lightbulb-o'
                },
                door_sensor: {
                    icon: 'fa fa-key',
                    control: {
                        toggle: {
                            onn: 'ion-ios-unlocked',
                            off: 'ion-ios-locked'
                        }
                    }
                },
                smoke_detector: {
                    icon: 'fa fa-fire-extinguisher'
                },
                water_leakage_sensor: {
                    icon: 'fa fa-tint'
                },
                gas_sensor: {
                    icon: 'fa fa-bomb'
                },
                motion_or_sound_sensor: {
                    icon: 'fa fa-volume-up'
                },
                unknown_device: {
                    icon: 'fa fa-question',
                    control: {
                        toggle: {
                            onn: 'ion-toggle-filled',
                            off: 'ion-toggle'
                        }
                    }
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