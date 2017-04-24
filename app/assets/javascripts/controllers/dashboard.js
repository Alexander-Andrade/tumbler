(function() {
    'use strict';

    angular.module('controllers').
    controller("dashboardCtrl", [ '$scope', 'automationServer','autoServSock',
      function($scope, automationServer, autoServSock) {
        $scope.automationServer = automationServer;
        $scope.autoServSock = autoServSock;
      }]);
}());