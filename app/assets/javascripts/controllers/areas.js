(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','Area','ModalService','Notification','notifications',
      function($scope, areas, Area,ModalService, Notification, notifications) {
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
                              console.log(response);
                              areas.push(response);
                              Notification.info(notifications, 'New area created: '+response.name)
                          }).catch(function (response) {
                              console.log(response);
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

                                console.log(response);
                          },function (response) {
                              console.log(response);
                          });
                      }
                  });
              });
          }
      }
    ]);

}());