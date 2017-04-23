(function() {
    'use strict';

    angular.module('services').factory('notifier', ['Notif','Notification', function(Notif, Notification) {
        var notifier = {};

        notifier.error = function (title, subjectName, errorText, notifs) {
            var reason = subjectName + ' ' + errorText;
            Notif.error(notifs, title + ': '+ reason);
            Notification.error({message: reason, title: title, closeOnClick: true});
        };

        notifier.info = function (title, subjectName, notifs) {
            Notif.info(notifs, title + ': ' + subjectName);
            Notification.info({message: subjectName, title: title, closeOnClick: true});
        };

        return notifier;

    }]);

}());
