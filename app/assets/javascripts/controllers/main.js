(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth', 'areas','notifs','notifier','autoServSock','deviceHelper','scripts',
      function($scope, $window, Auth, areas, notifs, notifier, autoServSock, deviceHelper, scripts) {
          $scope.logout = function () {
              Auth.logout().then(function () {
                  $window.location.reload();
              });
          };
          $scope.areas = areas;
          $scope.notifs = notifs;
          $scope.scripts = scripts;

          $scope.areNewNotifs = false;
          $scope.$watch('notifs.length', function (newLength) {
              $scope.areNewNotifs = (newLength != 0);
          });

          autoServSock.onMessage(function(message){
              var pack = JSON.parse(message.data);
              console.log(message.data);

              if(pack.type == 'dev_hello'){
                  deviceHelper.createDevice(pack, areas).then(function (response) {
                      notifier.info({ title: 'New device',
                          subject: response.name,
                          notifs: notifs,
                          origin: 'automation_server'
                      });
                  }).catch(function (response) {
                      console.log(response);
                      notifier.error({ title: 'New device',
                          subject: pack.dev_id,
                          notifs: notifs,
                          errors: response.errors,
                          origin: 'automation_server'
                      });
                  });
              }
              else if(pack.type == 'dev_changes'){
                  deviceHelper.applyChanges(pack, areas);
              }
          });
      }]);

}());