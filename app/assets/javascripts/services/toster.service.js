(function() {
    'use strict';

    angular.module('services').factory('toaster', ['$timeout', function($timeout) {
        var toaster = {};
        toaster.toasts = [];
        toaster.delay = 5000;

        toaster.setTimeout = function () {
            $timeout(function () {
                toaster.toasts.pop();
            }, toaster.delay, toaster.toasts.length);
        };

        toaster.tost = function (category, details) {
            var toast = {
                category: category,
                details:details
            };

            toaster.toasts.unshift(toast);
            toaster.setTimeout();
        };

        toaster.success = function (details) {
            toaster.tost('success',details);
        };

        toaster.info = function (details) {
            toaster.tost('info',details);
        };

        toaster.error = function (details) {
            toaster.tost('error',details);
        };

        return toaster;

    }]);

}());
