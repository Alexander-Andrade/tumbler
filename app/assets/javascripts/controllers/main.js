(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope', 'automationServer', 'autoServSock', 'areas',
      function($scope, automationServer, autoServSock, areas) {
          $scope.navbarToggle = false;

          $scope.toggleNavbar = function () {
              $scope.navbarToggle = !$scope.navbarToggle;
          };

          console.log(automationServer);
          console.log('areas');
          console.log(areas);
          console.log(autoServSock);

          // first_device = areas[0].devices[0]
          // f_area = areas[0]
          // f_area.name = "New name"
          // f_area.update()
          // first_device.label = 'light'
          // first_device.update()
      }]);

}());