(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','Area','ModalService',
      function($scope, areas, Area,ModalService) {
          $scope.areas = areas;

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
            var default_area = _.find($scope.areas, {default: true});
              _.firEach(area.devices, function (device) {
                  device.areaId = default_area.id;
              });
              default_area.devices += area.devices;
              area.destroy().then(function (response) {
                  console.log(response);
              },function (response) {
                  console.log(response);
              })
          };
      }
    ]);

}());