(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth', 'areas','notifs','Notif',
      function($scope, $window, Auth, areas, notifs, Notif) {
          $scope.logout = function () {
              Auth.logout().then(function () {
                  $window.location.reload();
              });
          };
          $scope.areas = areas;
          $scope.notifs = notifs;

          $scope.areNewNotifs = false;
          $scope.$watch('notifs.length', function (newLength) {
              $scope.areNewNotifs = (newLength != 0);
          });

      }]);

}());