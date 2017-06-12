(function() {
    'use strict';

    angular.module('directives').
    directive('areaDeviceItem', function () {

        var ctrl = ['$scope','deviceInfo', 'ModalService', 'Area','notifier','$window','$element','$timeout', function($scope, deviceInfo, ModalService, Area, notifier, $window, $element, $timeout){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);
            $scope.areas = Area.areas;

            $scope.changeArea = function () {
                ModalService.showModal({
                    templateUrl: "areas/area-select-modal/area-select-modal.html",
                    controller: "areaSelectModalCtrl",

                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(selectedArea) {
                        if(!_.isEmpty(selectedArea)){
                            var oldAreaId = $scope.device.area_id;
                            $scope.device.area_id = selectedArea.id;
                            $scope.device.update().then(function (response) {
                                var oldArea = _.find($scope.areas, { id: oldAreaId });
                                _.remove(oldArea.devices, {id: $scope.device.id});
                                selectedArea.devices.unshift($scope.device);

                                notifier.info({
                                    title: 'Device has been moved to '+selectedArea.name,
                                    subject: $scope.device.name,
                                    origin: 'user'
                                });
                            }).catch(function (response) {
                                $scope.device.area_id = oldAreaId;

                                notifier.error({
                                    title: "Can't move device to "+selectedArea.name,
                                    subject: $scope.device.name,
                                    errors: response.errors,
                                    origin: 'user'
                                });
                            });
                        }
                    });
                });
            };

            $scope.editModal = function () {
                ModalService.showModal({
                    templateUrl: "areas/device-edit-modal/device-edit-modal.html",
                    controller: "deviceEditModalCtrl",
                    inputs:{
                        device: $scope.device
                    }
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(updatedDevice) {
                        if(!_.isEmpty(updatedDevice)){
                            updatedDevice.update().then(function (response) {
                                _.assign($scope.device, updatedDevice);

                                notifier.info({
                                    title:'Device updated',
                                    subject: $scope.device.name,
                                    notifs: notifs,
                                    origin: 'user'
                                });
                            },function (response) {
                                notifier.error({
                                    title:'Fail to update device',
                                    subject: $scope.device.name,
                                    errors: response.data.errors,
                                    notifs: notifs,
                                    origin: 'user'
                                });
                            });
                        }
                    });
                });
            };

            $scope.updateName = function (newName) {
               var oldName = $scope.device.name;
                $scope.device.name = newName;
                return $scope.device.update().then(function(){}).catch(function () {
                    $scope.device.name = oldName;
                });
            };

            $scope.show = false;

            // $timeout(function(){
            //     $scope.show = false;
            // }, 500);

            $scope.toggleControlsAppearance = function () {
                $scope.show = !$scope.show;
                // if($scope.show){
                //     $element.triggerHandler('resize');
                //     // jQuery(window).trigger('resize');
                // }
            };

            $scope.updateControlName = function (newName, control) {
                var oldName = control.name;
                control.name = newName;
                return $scope.device.update().then(function(){}).catch(function (response) {
                    console.log(response);
                    control.name = oldName;
                });
            };


            $scope.showStatistics = function() {
                ModalService.showModal({
                    templateUrl: "areas/dev-stat-modal/dev-stat-modal.html",
                    controller: "devStatModalCtrl",
                    inputs:{
                        device: $scope.device
                    }
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function() {
                    })
                })
            }
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/area-device-item.html',
            scope: {
                device: "="
            },
            replace: true,
            controller: ctrl
        };

        return directive;
    });
}());