(function() {
    'use strict';

    angular.module('directives').
    directive('notificationAccordion', function () {

        var ctrl = ['$scope','$filter','Notification', function ($scope, $filter, Notification) {
            $scope.notifs = $filter('notificationsByOrigin')($scope.notifications, $scope.origin);

            $scope.$watch('notifications.length', function (notifications) {
                console.log('notifs changes!!!');
                $scope.notifs = $filter('notificationsByOrigin')($scope.notifications, $scope.origin);
            });

            $scope.deleteAll = function () {
                var promises = Notification.deleteAll($scope.notifications, $scope.origin);
            };

            $scope.formatDeleteText = function (text) {
              return _.lowerCase(text);
            };
        }];

        var directive =  {
            templateUrl: 'directives/notification-drawer/notification-accordion/notification-accordion.html',
            replace: true,
            scope: {
                title: '@',
                collapseId: '@',
                notifications: '=',
                origin: '@',
                onMarkRead: '&',
                onDeleteAll: '&'
            },
            controller: ctrl
        };

        return directive;
    });
}());