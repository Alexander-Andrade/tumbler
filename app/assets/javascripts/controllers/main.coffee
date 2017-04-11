angular.module('controllers').
controller("mainCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer', '$http'
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer, $http)->
    $scope.navbarToggle = false

    $scope.toggleNavbar = ->
      $scope.navbarToggle = !$scope.navbarToggle

    as = $http({method: 'GET', url: '/get_automation_server'})
#    console.log(as)
    as.then((answer) ->
      console.log 'answer: '
      console.log answer.data
    )
])