(function() {
    'use strict';

    angular.module('directives').
    directive('areaDeviceItem', function () {

        var ctrl = ['$scope','deviceInfo', 'ModalService', 'notifier', function($scope, deviceInfo, ModalService, notifier){
            $scope.info = deviceInfo.infoByLabel($scope.device.label);

            $scope.changeArea = function () {
                ModalService.showModal({
                    templateUrl: "areas/area-select-modal/area-select-modal.html",
                    controller: "areaSelectModalCtrl",
                    inputs:{
                        areas: $scope.areas
                    }
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(selectedArea) {
                        if(!_.isEmpty(selectedArea)){
                            var oldAreaId = $scope.device.areaId;
                            $scope.device.areaId = selectedArea.id;
                            $scope.device.update().then(function (response) {
                                var oldArea = _.find($scope.areas, { id: oldAreaId });
                                _.remove(oldArea.devices, {id: $scope.device.id});
                                selectedArea.devices.unshift($scope.device);

                                notifier.info({
                                    title: 'Device has been moved to '+selectedArea.name,
                                    subject: $scope.device.name,
                                    notifs: $scope.notifs,
                                    origin: 'user'
                                });
                            }).catch(function (response) {
                                $scope.device.areaId = oldAreaId;

                                notifier.error({
                                    title: "Can't move device to "+selectedArea.name,
                                    subject: $scope.device.name,
                                    errors: response.errors,
                                    notifs: $scope.notifs,
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

            $scope.oldName = '';
            $scope.changeName = function (newName) {
                $scope.oldName = $scope.device.name;
                $scope.device.name = newName;
                $scope.editableName = false;
                return $scope.device.update();
            };

            $scope.show = false;

            $scope.toggleControlsAppearance = function () {
                $scope.show = !$scope.show;
            };
        }];

        var directive = {
            templateUrl: 'directives/area/area-card/area-device-item/area-device-item.html',
            scope: {
                areas: '=',
                notifs: '=',
                device: "="
            },
            replace: true,
            controller: ctrl
        };

        return directive;
    });
}());