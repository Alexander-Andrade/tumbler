(function() {
    'use strict';

    angular.module('directives').
    directive('weatherInput', function () {

        var ctrl = ['$scope', function ($scope) {

            // $scope.tempChanged = function () {
            //     $scope.assignTemp();
            // };
            //
            // $scope.pressureChanged = function () {
            //     $scope.assignPressure();
            // };
            //
            // $scope.humidityChanged = function () {
            //     $scope.assignHumid();
            // };
            //
            // $scope.assignTemp = function () {
            //     if($scope.enableTemp){
            //         $scope.temperature = $scope.model.temp;
            //     }else{
            //         $scope.temperature = null;
            //     }
            // };
            //
            // $scope.assignHumid = function () {
            //     if($scope.enableHumid){
            //         $scope.humidity = $scope.model.humid;
            //         console.log($scope.humidity);
            //     }else{
            //         $scope.humidity = null;
            //     }
            // };
            //
            // $scope.assignPressure = function () {
            //     if($scope.enablePressure){
            //         $scope.pressure = $scope.model.press;
            //     }else{
            //         $scope.pressure = null;
            //     }
            // };

        }];

        var directive =  {
            templateUrl: 'directives/script/weather-input/weather-input.html',
            scope: {
                temperature: '=',
                humidity: '=',
                pressure: '=',
                enableTemp: '=',
                enableHumid: '=',
                enablePressure: '='
            },
            controller: ctrl
        };

        return directive;
    });
}());