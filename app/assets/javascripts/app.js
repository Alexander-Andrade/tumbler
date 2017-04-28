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
  'angular.vertilize',
  'xeditable',
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


app.run(['editableOptions','editableThemes', function (editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-lg';
    editableThemes.bs3.buttonsClass = 'btn-lg';
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
}]);


app.config([ '$stateProvider','$urlRouterProvider', 'railsSerializerProvider',
  function($stateProvider, $urlRouterProvider, railsSerializerProvider) {
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

      railsSerializerProvider.underscore(angular.identity).camelize(angular.identity);
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
