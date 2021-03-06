var app = angular.module('app',[
  'templates',
  'ui.router',
  'ngResource',
  'ngWebSocket',
  'Devise',
  'ui-rangeSlider',
  'angularModalService',
  'mgo-angular-wizard',
  'ui.bootstrap',
  'rails',
  'ui-notification',
  'angularMoment',
  'angular.vertilize',
  'xeditable',
  'toggle-switch',
  'nya.bootstrap.select',
  'nk.touchspin',
  'moment-picker',
  'ymaps',
  'gridshore.c3js.chart',
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
                  notifs: notifs,
                  scripts: scripts
              },
              onEnter: ['areas','Area', 'scripts','Script', 'notifs','Notif', function (areas, Area, scripts, Script, notifs, Notif) {
                Area.areas = areas;
                Script.scripts = scripts;
                Notif.notifs = notifs;
              }]

          }).state('dashboard', {
              parent: 'app',
              url: '/dashboard',
              templateUrl: "dashboard/index.html",
              controller: 'dashboardCtrl'
          }).state('scripts', {
              parent: 'app',
              url: '/scripts',
              views:{
                  '': {
                      templateUrl: "scripts/index.html",
                      controller: 'scriptsCtrl'
                  },
                  'toolbar': {
                      templateUrl: 'scripts/toolbar.html',
                      controller: 'scriptsCtrl'
                  }
              },
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
          }).state('automation_server_location',{
              parent: 'app',
              url: '/automation_server_location',
              views:{
                  '': {
                      templateUrl: "automation-server-location/location.html",
                      controller: 'locationCtrl'
                  },
                  'toolbar': {
                      templateUrl: 'automation-server-location/toolbar.html',
                      controller: 'locationCtrl'
                  }
              },
          }).state('devices_statistics',{
              parent: 'app',
              url: '/devices_statistics',
              views:{
                  '': {
                      templateUrl: "devices-statistics/statistics.html",
                      controller: 'devStatCtrl'
                  },
                  'toolbar': {
                      templateUrl: 'devices-statistics/toolbar.html',
                      controller: 'devStatCtrl'
                  }
              },
      });


      $urlRouterProvider.otherwise('/dashboard');

      railsSerializerProvider.underscore(angular.identity).camelize(angular.identity);

      // uiGmapGoogleMapApiProvider.configure({
      //     key: 'AIzaSyB1hgUqgEG5lpgt0JbQdLceGq82i_dZX6I',
      //     v: '3.20', //defaults to latest 3.X anyhow
      //     libraries: 'weather,geometry,visualization'
      // });
  }]);

areas = ['Area', function(Area) {
    return Area.query();
}];

notifs = ['Notif', function (Notif) {
    return Notif.query();
}];

scripts = ['Script', function (Script) {
    return Script.query();
}];


angular.module('controllers',[]);
angular.module('services',[]);
angular.module('directives',[]);
angular.module('filters',[]);
