(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth', 'Area','Notif','notifier','autoServSock','deviceHelper','Script', 'scriptHelper',
      function($scope, $window, Auth, Area, Notif,notifier, autoServSock, deviceHelper, Script, scriptHelper) {
          $scope.logout = function () {
              Auth.logout().then(function () {
                  $window.location.reload();
              });
          };
          $scope.areas = Area.areas;
          $scope.notifs = Notif.notifs;
          $scope.scripts = Script.scripts;

          $scope.areNewNotifs = false;
          $scope.$watch('notifs.length', function (newLength) {
              $scope.areNewNotifs = (newLength != 0);
          });

          autoServSock.onMessage(function(message){
              var pack = JSON.parse(message.data);
              console.log(message.data);

              switch(pack.type){
                  case 'dev_hello':
                      deviceHelper.createDevice(pack).then(function (response) {
                          notifier.info({ title: 'New device',
                              subject: response.name,
                              origin: 'automation_server'
                          });
                      }).catch(function (response) {
                          console.log(response);
                          notifier.error({ title: 'New device',
                              subject: pack.dev_id,
                              errors: response.errors,
                              origin: 'automation_server'
                          });
                      });
                      break;

                  case 'dev_changes':
                      deviceHelper.applyChanges(pack);
                      break;

                  case 'script_changes':
                      scriptHelper.applyChanges(pack);
                      break;

                  default:
                      console.log(pack);
                      break;
              }
          });
      }]);

}());