angular.module('controllers').
controller("mainCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer','areas'
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer, areas)->
    $scope.navbarToggle = false

    $scope.toggleNavbar = ->
      $scope.navbarToggle = !$scope.navbarToggle

    console.log areas
    first_device = areas[0].devices[0]
    f_area = areas[0]
    f_area.name = "New name"
    f_area.update()
#    first_device.label = 'light'
#    first_device.update()
])