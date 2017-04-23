(function() {
    'use strict';

    angular.module('directives').
    directive('notificationDrawer', function () {

        var ctrl = ['$scope','Notification', function ($scope, Notification) {
            $scope.deleteAll = function (group) {
                var promises = Notification.markReadByGroup($scope.notifications, group);
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