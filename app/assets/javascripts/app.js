var app = angular.module('app',[
  'templates',
  'ui.router',
  'ngResource',
  'ngWebSocket',
  'Devise',
  'ngFlash',
  'ui-rangeSlider',
  'uiSwitch',
  'angularModalService',
  'mgo-angular-wizard',
  'rzModule',
  'angularSpinner',
  'ui.bootstrap',
  'rails',
  'ui-notification',
  'angularMoment',
  'controllers',
  'services',
  'directives',
  'filters'
]);

// lodash
app.constant('_', window._)
  .run(['$rootScope', function($rootScope) {
      $rootScope._ = window._
  }]);


app.run(['$window','automationSocket', function ($window, automationSocket) {
// automationSocket.then(function (socket) {
//     $window.onbeforeunload = function () {
//         socket.close();
//         $window.alert(greeting);
//     };
// });
}]);



app.config([ '$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('app', {
              url: '',
              abstract: true,
              views: {
                  '': {
                      templateUrl: 'layout.html',
                      controller: 'mainCtrl'
                  }
              },

              resolve: {
                  areas: areas,
                  automationServer: 'automationServer',
                  autoServSock: 'automationSocket',
                  notifs: notifs
              }
          }).state('dashboard', {
              parent: 'app',
              url: '/dashboard',
              templateUrl: "dashboard/index.html",
              controller: 'dashboardCtrl'
          }).state('scripts', {
              parent: 'app',
              url: '/scripts',
              templateUrl: "scripts/index.html",
              controller: 'scriptsCtrl'
          }).state('areas', {
              parent: 'app',
              url: '/areas',
              views:{
                  '': {
                      templateUrl: "areas/index.html",
                      controller: 'areasCtrl'
                  },
                  'toolbar': {
                      templateUrl: 'areas/toolbar.html',
                      controller: 'areasCtrl'
                  }
              }
          });


      $urlRouterProvider.otherwise('/dashboard');
  }]);

areas = ['Area', function(Area) {
    return Area.query();
}];

notifs = ['Notif', function (Notif) {
    return Notif.query();
}];

angular.module('controllers',[]);
angular.module('services',[]);
angular.module('directives',[]);
angular.module('filters',[]);
