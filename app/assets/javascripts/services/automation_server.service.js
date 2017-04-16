angular.module('services').factory('automationServer', [
    '$http', function($http) {
        this.server = null;
        var makeRequest = function() {
            console.log('automationServer request !');
            return $http({
                method: 'GET',
                url: '/automation_server'
            }).then(function(response) {
                return response.data;
            });
        };
        this.getServer = function(update) {
            if (update || !this.server) {
                this.server = makeRequest();
            }
        return this.server;
        };
        return this.getServer();
    }
]);