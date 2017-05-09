(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','Area','ModalService','notifier','notifs',
      function($scope, areas, Area,ModalService, notifier, notifs) {
          $scope.areas = areas;
          console.log('default');
          console.log(Area.default());
          $scope.AreaTitle = function () {
            return pluralize('Area', $scope.areas.length, true);
          };

          $scope.addNewArea = function () {
              ModalService.showModal({
                  templateUrl: "areas/area-modal/area-modal.html",
                  controller: "areaModalCtrl",
                  inputs:{
                    title: 'Add new area',
                    area: {}
                  }
              }).then(function(modal) {
                  modal.element.modal();
                  modal.close.then(function(area) {
                      if(!_.isEmpty(area)){
                          new Area(area).create().then(function (response) {
                              response.devices = [];
                              areas.push(response);
                              notifier.info({
                                  title:'Area created',
                                  subject: response.name,
                                  notifs: notifs,
                                  origin: 'user'
                              });
                          }).catch(function (response) {
                              notifier.error({
                                  title:'Fail to create area',
                                  subject: area.name,
                                  errors: response.data.errors,
                                  notifs: notifs,
                                  origin: 'user'
                              });

                          });
                      }
                  });
              });
          };

          var removeAreaOnly = function(area){
              area.delete().then(function (response) {
                  _.remove($scope.areas, { id: area.id });

                  notifier.info({
                      title:'Area deleted',
                      subject: response.name,
                      notifs:notifs
                  });
              }).catch(function (response) {
                  notifier.error({
                      title:'Fail to delete area',
                      subject: area.name,
                      error: response.data.errors.name,
                      notifs: notifs
                  });
              });
          };

          $scope.destroyArea = function (area) {
              var defaultArea = Area.defaultArea($scope.areas);
              if (area.id != defaultArea.id) {
                  var nDevices = area.devices.length;
                  var nUpdated = 0;
                  if(nDevices) {
                      _.forEach(area.devices, function (device) {
                          device.area_id = defaultArea.id;
                          device.update().then(function () {
                              defaultArea.devices.unshift(device);
                              nUpdated += 1;

                              if (nUpdated == nDevices) {
                                  removeAreaOnly(area);
                              }

                              notifier.info({
                                  title: 'Device has been moved to '+defaultArea.name,
                                  subject: device.name,
                                  notifs: $scope.notifs,
                                  origin: 'user'
                              });
                          });
                      });
                  }else{
                      removeAreaOnly(area);
                  }
              }
          };

          $scope.editArea = function (area) {
              ModalService.showModal({
                  templateUrl: "areas/area-modal/area-modal.html",
                  controller: "areaModalCtrl",
                  inputs:{
                      title: 'Edit area',
                      area:area
                  }
              }).then(function(modal) {
                  modal.element.modal();
                  modal.close.then(function(updatedArea) {
                      if(!_.isEmpty(updatedArea)){
                            updatedArea.update().then(function (response) {
                                _.assign(area, updatedArea);

                                notifier.info({
                                    title:'Area updated',
                                    subject: response.name,
                                    notifs: notifs,
                                    origin: 'user'
                                });
                          },function (response) {
                                notifier.error({
                                    title:'Fail to update area',
                                    subject: area.name,
                                    errors: response.data.errors,
                                    notifs: notifs,
                                    origin: 'user'
                                });
                          });
                      }
                  });
              });
          };
      }
    ]);

}());