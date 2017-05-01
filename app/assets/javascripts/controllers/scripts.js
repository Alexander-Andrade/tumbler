(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptsCtrl", [ '$scope','scripts','Script','ModalService','notifier','notifs',
      function($scope, scripts, Script, ModalService, notifier, notifs){
        $scope.scripts = scripts;

          $scope.addNewScript = function () {
              ModalService.showModal({
                  templateUrl: "scripts/script-modal/script-modal.html",
                  controller: "scriptModalCtrl",
                  inputs:{
                  }
              }).then(function(modal) {
                  modal.element.modal();
                  modal.close.then(function(script) {
                    console.log(script);
                  });
              });
          };

    }]);

}());