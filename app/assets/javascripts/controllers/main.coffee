angular.module('controllers').
controller("mainCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer','areas'
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer, areas)->
    $scope.navbarToggle = false

    $scope.toggleNavbar = ->
      $scope.navbarToggle = !$scope.navbarToggle

    console.log areas
])