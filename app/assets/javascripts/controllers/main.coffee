angular.module('controllers').
controller("mainCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer'
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer)->
])