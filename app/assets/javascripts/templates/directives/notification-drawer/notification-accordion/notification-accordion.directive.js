(function() {
    'use strict';

    angular.module('directives').
    directive('notificationAccordion', function () {

        var ctrl = ['$scope','$filter','Notif', function ($scope, $filter, Notif) {
            $scope.notifications = $filter('notificationsByOrigin')($scope.notifs, $scope.origin);

            $scope.$watch('notifs.length', function (len) {
                $scope.notifications = $filter('notificationsByOrigin')($scope.notifs, $scope.origin);
            });

            $scope.deleteAll = function () {
                var promises = Notif.deleteAll($scope.notifs, $scope.origin);
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
                notifs: '=',
                origin: '@',
                onMarkRead: '&',
                onDeleteAll: '&'
            },
            controller: ctrl
        };

        return directive;
    });
}());