(function() {
    'use strict';

    angular.module('directives').
    directive('notificationDrawer', function () {

        var notificationCtrl = ['$scope','Notification', function ($scope, Notification) {

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