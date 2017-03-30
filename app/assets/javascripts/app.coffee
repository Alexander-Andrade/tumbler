app = angular.module('app',[
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
  'controllers',
  'services',
  'directives'
])

# lodash
app.constant('_', window._)
  .run(['$rootScope',($rootScope) ->
    $rootScope._ = window._
])

app.config([ '$stateProvider','$urlRouterProvider',
  ($stateProvider,$urlRouterProvider)->
    $stateProvider
      .state('app',{
        url: ''
        abstract: true
        views: {
          '': {
            templateUrl: 'layout.html.slim'
            controller: 'mainCtrl'
          }
        }
        resolve: {
          getAutomationServer: (automationServerService)->

        }




    }).state('dashboard',{
        url: '/dashboard'
        templateUrl: "dashboard/index.html"
        controller: 'dashboardCtrl'
      })
    $urlRouterProvider.otherwise('/dashboard');
])

angular.module('controllers',[])
angular.module('services',[])
angular.module('directives',[])