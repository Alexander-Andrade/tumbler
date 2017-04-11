angular.module('controllers').
controller("mainCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer'
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer)->
    $scope.navbarToggle = false

    $scope.toggleNavbar = ->
      $scope.navbarToggle = !$scope.navbarToggle

    as = $http({method: 'GET', url: '/get_automation_server'})
    console.log(as)
    as.get().then((answer) ->
      console.log answer
    )
])