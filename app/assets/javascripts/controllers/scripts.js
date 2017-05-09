(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptsCtrl", [ '$scope','scripts','Script','ModalService','notifier','notifs', 'areas',
      function($scope, scripts, Script, ModalService, notifier, notifs, areas){
        $scope.scripts = scripts;

          $scope.ScriptTitle = function () {
              return pluralize('Script', $scope.scripts.length, true);
          };

          $scope.addNewScript = function () {
              ModalService.showModal({
                  templateUrl: "scripts/script-modal/script-modal.html",
                  controller: "scriptModalCtrl",
                  inputs:{
                      areas: areas
                  }
              }).then(function(modal) {
                  modal.element.modal();
                  modal.close.then(function(script) {
                      new Script(script).create().then(function (response) {
                          scripts.unshift(response);
                          notifier.info({
                              title:'Script created',
                              subject: response.name,
                              notifs: notifs,
                              origin: 'user'
                          });
                      }).catch(function (response) {
                          notifier.error({
                              title:'Fail to create script',
                              subject: script.name,
                              errors: response.data.errors,
                              notifs: notifs,
                              origin: 'user'
                          });
                      });
                  });
              });
          };

          $scope.destroy = function (item) {
              item.delete().then(function (response) {
                  _.remove(scripts, {id: item.id});
                  notifier.info({
                      title:'Script deleted',
                      subject: item.name,
                      notifs: notifs,
                      origin: 'user'
                  });
              }).catch(function (response) {
                  notifier.error({
                      title:'Fail to delete script',
                      subject: item.name,
                      errors: response.data.errors,
                      notifs: notifs,
                      origin: 'user'
                  });
              });
          };
    }]);

}());