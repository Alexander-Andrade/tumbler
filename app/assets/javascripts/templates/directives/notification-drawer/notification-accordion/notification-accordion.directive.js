(function() {
    'use strict';

    angular.module('directives').
    directive('notificationAccordion', function () {
        var directive =  {
            templateUrl: 'directives/notification-drawer/notification-accordion/notification-accordion.html',
            replace: true,
            scope: {
                title: '@',
                collapseId: '@',
                notifications: '=',
                onMarkRead: '&',
                onDeleteAll: '&'
            },
        };

        return directive;
    });
}());