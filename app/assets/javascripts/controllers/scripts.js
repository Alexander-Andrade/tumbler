(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptsCtrl", [ '$scope', 'Script','ModalService','notifier', 'Area',
      function($scope, Script, ModalService, notifier, Area){
        $scope.scripts = Script.scripts;

          $scope.ScriptTitle = function () {
              return pluralize('Script', $scope.scripts.length, true);
          };

          $scope.addNewScript = function () {
              ModalService.showModal({
                  templateUrl: "scripts/script-modal/script-modal.html",
                  controller: "scriptModalCtrl",
                  inputs:{
                      areas: Area.areas
                  }
              }).then(function(modal) {
                  modal.element.modal();
                  modal.close.then(function(script) {
                      Script.Create(new Script(script)).then(function (response) {
                          notifier.info({
                              title:'Script created',
                              subject: response.name,
                              origin: 'user'
                          });
                      }).catch(function (response) {
                          notifier.error({
                              title:'Fail to create script',
                              subject: script.name,
                              errors: response.data.errors,
                              origin: 'user'
                          });
                      });
                  });
              });
          };

          $scope.destroy = function (item) {
              Script.Delete(item).then(function (response) {
                  notifier.info({
                      title:'Script deleted',
                      subject: item.name,
                      origin: 'user'
                  });
              }).catch(function (response) {
                  notifier.error({
                      title:'Fail to delete script',
                      subject: item.name,
                      errors: response.data.errors,
                      origin: 'user'
                  });
              });
          };
    }]);

}());