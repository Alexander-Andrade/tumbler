angular.module('controllers').
controller("scriptsCtrl", [ '$scope', '$state','$stateParams','$resource','ModalService', 'Flash', '$websocket','Auth','automationServer',
  ($scope, $state,$stateParams,$resource,ModalService, Flash, $websocket, Auth, automationServer)->
])