(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','Area','ModalService',
      function($scope, areas, Area,ModalService) {
          $scope.areas = areas;
          console.log($scope.areas);
          $scope.addNewArea = function () {
              ModalService.showModal({
                  templateUrl: "areas/new-area-modal/new-area-modal.html",
                  controller: "newAreaModalCtrl",
                  inputs:{
                    areas:areas
                  }
              }).then(function(modal) {
                  // The modal object has the element built, if this is a bootstrap modal
                  // you can call 'modal' to show it, if it's a custom modal just show or hide
                  // it as you need to.
                  modal.element.modal();
                  modal.close.then(function(result) {
                      $scope.message = result ? "You said Yes" : "You said No";
                  });
              });
          };

          $scope.destroyArea = function (area) {
              var defaultArea = Area.defaultArea($scope.areas);
              _.forEach(area.devices, function (device) {
                  device.areaId = defaultArea.id;
                  device.update();
              });
              defaultArea.devices = _.concat(defaultArea.devices,area.devices );
              area.delete().then(function (response) {
                  _.pull($scope.areas, area);
                  console.log(response);
              },function (response) {
                  console.log(response);
              })
          };
      }
    ]);

}());