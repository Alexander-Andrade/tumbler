(function() {
    'use strict';

    angular.module('directives').
    directive('notificationItem', function () {

        var directive =  {
            templateUrl: 'directives/notification-item/notification-item.html',
            replace: true,
            scope: {
                notification: '='
            }
        };

        return directive;
    });
}());