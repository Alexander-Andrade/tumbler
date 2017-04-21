(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth','automationServer', 'autoServSock', 'areas',
      function($scope, $window, Auth, automationServer, autoServSock, areas) {
          $scope.navbarToggle = false;

          $scope.toggleNavbar = function () {
              $scope.navbarToggle = !$scope.navbarToggle;
          };

          $scope.logout = function () {
              Auth.logout().then(function () {
                  $window.location.reload();
              });
          };

          $scope.areas = areas;
          // first_device = areas[0].devices[0]
          // f_area = areas[0]
          // f_area.name = "New name"
          // f_area.update()
          // first_device.label = 'light'
          // first_device.update()
      }]);

}());