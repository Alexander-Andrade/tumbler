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
                    icon: 'ion-android-sunny'
                },
                door_sensor: {
                    icon: 'ion-key',
                    control: {
                        toggle: {
                            onn: 'ion-ios-unlocked',
                            off: 'ion-ios-locked'
                        }
                    }
                },
                smoke_detector: {
                    icon: 'ion-no-smoking'
                },
                water_leakage_sensor: {
                    icon: 'ion-waterdrop'
                },
                gas_sensor: {
                    icon: 'fa fa-bomb'
                },
                motion_or_sound_sensor: {
                    icon: 'ion-ios-volume-high'
                },
                unknown_device: {
                    icon: 'ion-help',
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