(function() {
    'use strict';

    angular.module('controllers').
    controller("areasCtrl", [ '$scope','areas','ModalService',
      function($scope, areas, ModalService) {
          $scope.areas = areas;

          $scope.addNewArea = function () {
              ModalService.showModal({
                  templateUrl: "areas/new-area-modal/new-area-modal.html",
                  controller: "newAreaModalCtrl"
              }).then(function(modal) {
                  // The modal object has the element built, if this is a bootstrap modal
                  // you can call 'modal' to show it, if it's a custom modal just show or hide
                  // it as you need to.
                  modal.element.modal();
                  modal.close.then(function(result) {
                      $scope.message = result ? "You said Yes" : "You said No";
                  });
              });
          }
      }
    ]);

}());