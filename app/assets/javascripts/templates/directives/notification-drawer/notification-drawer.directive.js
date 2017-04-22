(function() {
    'use strict';

    angular.module('directives').
    directive('notificationDrawer', function () {

        var notificationCtrl = ['$scope','Notification', function ($scope, Notification) {
            console.log($scope.notifications);
            $scope.notifs_from_user = Notification.filterByOrigin($scope.notifications, 'user');
            $scope.notifs_from_autoserver = Notification.filterByOrigin($scope.notifications, 'automation_server');
            
            $scope.markAllRead = function (group) {
                var promises = Notification.markReadByGroup(group);
                // not create new notification on actions with notifications
            };
        }];


        var directive =  {
            templateUrl: 'directives/notification-drawer/notification-drawer.html',
            replace: true,
            scope: {
                notifications: '='
            },
            controller: notificationCtrl
        };

        return directive;
    });
}());