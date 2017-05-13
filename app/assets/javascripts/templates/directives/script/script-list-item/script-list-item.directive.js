(function() {
    'use strict';

    angular.module('directives').
    directive('scriptListItem', function () {

        var ctrl = ['$scope','scriptHelper', 'ModalService', function ($scope, scriptHelper, ModalService) {

            $scope.updateName = function (name) {
                var oldName = $scope.script.name;
                $scope.script.name = name;
                $scope.script.update().then(function (response) {
                }).catch(function (response) {
                    $scope.script.description = oldName;
                });
            };

            $scope.updateDescription = function (description) {
                var oldDescription = $scope.script.description;
                $scope.script.description = description;
                $scope.script.update().then(function (response) {
                }).catch(function (response) {
                    $scope.script.description = oldDescription;
                });
            };

            $scope.shedule = function () {
                ModalService.showModal({
                    templateUrl: "scripts/shedule-modal/shedule-modal.html",
                    controller: "sheduleModalCtrl",
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(date) {
                        if(!_.isEmpty(date)){
                           $scope.script.start_time = date;
                           $scope.run();
                        }
                    });
                });
            };

            $scope.run = function () {
                scriptHelper.sendStart($scope.script);
            };

            $scope.stop = function () {
                scriptHelper.sendStop($scope.script);

            };
        }];

        var directive =  {
            templateUrl: 'directives/script/script-list-item/script-list-item.html',
            scope: {
                script: '=',
                destroy: '&'
            },
            replace: true,
            controller: ctrl
        };

        return directive;
    });
}());