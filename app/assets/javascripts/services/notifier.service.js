(function() {
    'use strict';

    angular.module('services').factory('notifier', ['Notif','Notification', function(Notif, Notification) {
        var notifier = {};

        notifier.error = function (params) {
            var concatErrors = params.errors;
            var reason = params.subject + ' ' + '';
            Notif.error(params.notifs, params.title + ': '+ reason, params.origin);
            Notification.error({message: reason, title: params.title, closeOnClick: true});
        };

        notifier.info = function (params) {
            Notif.info(params.notifs, params.title + ': ' + params.subject, params.origin);
            Notification.info({message: params.subject, title: params.title, closeOnClick: true});
        };

        return notifier;

    }]);

}());
