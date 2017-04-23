(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','Area','ModalService','Notif','notifs','Notification',
      function($scope, areas, Area,ModalService, Notif, notifs, Notification) {
          $scope.areas = areas;

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
                              areas.push(response);
                              Notif.info(notifs, 'Area created: '+response.name);
                              Notification.info({message: response.name, title: 'Area created', closeOnClick: true});
                          }).catch(function (response) {
                              var reason = area.name+' '+response.data.errors.name;
                              Notif.error(notifs, 'Fail to create area: '+reason);
                              Notification.error({message: reason, title: 'Fail to create area', closeOnClick: true});
                          });
                      }
                  });
              });
          };

          $scope.destroyArea = function (area) {
              var defaultArea = Area.defaultArea($scope.areas);
              if (area.id != defaultArea.id) {
                  _.forEach(area.devices, function (device) {
                      device.areaId = defaultArea.id;
                      device.update();
                  });
                  defaultArea.devices = _.concat(defaultArea.devices, area.devices);
                  area.delete().then(function (response) {
                      _.pull($scope.areas, area);
                      console.log(response);
                      var message = 'Area created: '+response.name;
                      Notif.info(notifs, message);
                      Notification.info({message: message, title: 'Primary notification'});
                  }).catch(function (response) {
                      console.log(response);
                  });
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

                                Notif.info(notifs, 'Area updated: '+response.name);
                                Notification.info({message: response.name, title: 'Area updated', closeOnClick: true});
                          },function (response) {
                                var reason = area.name+' '+response.data.errors.name;
                                Notif.error(notifs, 'Fail to update area: '+reason);
                                Notification.error({message: reason, title: 'Fail to update area', closeOnClick: true});
                          });
                      }
                  });
              });
          }
      }
    ]);

}());