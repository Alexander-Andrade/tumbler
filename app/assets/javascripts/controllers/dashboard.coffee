angular.module('controllers').
controller("dashboardCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth'
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth)->
    $scope.user = null
    Auth.currentUser().then (user) ->
      $scope.user = user
      console.log $scope.user
])