(function() {
    'use strict';

    angular.module('directives').
    directive('notificationDrawer', function () {

        var ctrl = ['$scope','Notif', function ($scope, Notif) {
            $scope.notifs = Notif.notifs;
            $scope.deleteAll = function () {
                var promises = Notif.deleteAll($scope.notifs);
            };

        }];


        var directive =  {
            templateUrl: 'directives/notification-drawer/notification-drawer.html',
            replace: true,
            scope: {
            },
            controller: ctrl
        };

        return directive;
    });
}());