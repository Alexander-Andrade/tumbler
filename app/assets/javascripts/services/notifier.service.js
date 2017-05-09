(function() {
    'use strict';

    angular.module('services').factory('notifier', ['Notif','Notification', function(Notif, Notification) {
        var notifier = {};

        notifier.error = function (params) {
            var allErrors = _.join(_.flatMap(params.errors, function (err_array) {
                return err_array;
            }),'; ');
            var reason = params.subject + ' ' + allErrors;
            Notif.error(params.title + ': '+ reason, params.origin);
            Notification.error({message: reason, title: params.title, closeOnClick: true});
        };

        notifier.info = function (params) {
            Notif.info(params.title + ': ' + params.subject, params.origin);
            Notification.info({message: params.subject, title: params.title, closeOnClick: true});
        };

        return notifier;

    }]);

}());
