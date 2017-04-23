(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth','automationServer', 'autoServSock', 'areas','notifications','Notification',
      function($scope, $window, Auth, automationServer, autoServSock, areas, notifications, Notification) {
          $scope.logout = function () {
              console.log(notifications);
              console.log($scope.notifications);
              Auth.logout().then(function () {
                  $window.location.reload();
              });
          };
          $scope.areas = areas;
          $scope.notifications = notifications;

          $scope.areNewNotifications = false;
          $scope.$watch('notifications.length', function (newLength) {
              $scope.areNewNotifications = (newLength != 0);
          });

      }]);

}());