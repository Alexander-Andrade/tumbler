(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth','automationServer', 'autoServSock', 'areas','notifications','Notification',
      function($scope, $window, Auth, automationServer, autoServSock, areas, notifications, Notification) {
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
          $scope.notifications = notifications;

          $scope.allNotifAreRead = function () {
              return Notification.areRead(notifications);
          }
      }]);

}());