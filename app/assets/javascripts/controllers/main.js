(function() {
    'use strict';

    angular.module('controllers').
    controller("mainCtrl", [ '$scope','$window', 'Auth', 'areas','notifs','notifier','autoServSock',
      function($scope, $window, Auth, areas, notifs, notifier, autoServSock) {
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

          autoServSock.onMessage(function(message){
              // add new device handler
              var pack = JSON.parse(message.data);
              if(pack.type == 'dev_hello'){
                  autoServSock.createNewDevice(pack, areas).then(function (response) {
                      notifier.info({ title: 'New device',
                          subject: pack.name,
                          notifs: notifs,
                          origin: 'automation_server'
                      });
                  }).catch(function (response) {
                      console.log(response);
                      notifier.error({ title: 'New device',
                          subject: pack.name,
                          notifs: notifs,
                          errors: response,
                          origin: 'automation_server'
                      });
                  });
              }
          });

          // autoServSock.onMessage(function(message){
          //     console.log('one more');
          // });

      }]);

}());