(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','Area','ModalService','notifier','notifs',
      function($scope, areas, Area,ModalService, notifier, notifs) {
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

                      notifier.info('Area deleted', response.name, notifs);
                  }).catch(function (response) {
                      notifier.error('Fail to delete area', area.name, response.data.errors.name, notifs);
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

                                notifier.info({
                                    title:'Area created',
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
          }
      }
    ]);

}());