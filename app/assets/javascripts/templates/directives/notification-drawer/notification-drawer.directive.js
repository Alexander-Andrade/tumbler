(function() {
    'use strict';

    angular.module('directives').
    directive('notificationDrawer', function () {

        var ctrl = ['$scope','Notification', function ($scope, Notification) {

            $scope.deleteAll = function () {
                var promises = Notification.deleteAll($scope.notifications);
            };

        }];


        var directive =  {
            templateUrl: 'directives/notification-drawer/notification-drawer.html',
            replace: true,
            scope: {
                notifications: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());