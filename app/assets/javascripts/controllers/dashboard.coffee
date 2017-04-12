angular.module('controllers').
controller("dashboardCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer',
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer)->
    $scope.count = 5
])