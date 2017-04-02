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
          '': { templateUrl: 'layout.html' },
          'vertical_nav': { templateUrl: 'vertical-nav.html' }
        }
        controller: 'mainCtrl'
        resolve: {
          automationServer: automationServer
          #automationSock: automationSock
        }
    }).state('dashboard',{
        parent: 'app'
        url: '/dashboard'
        templateUrl: "dashboard/index.html"
#        views: {
#          '': { templateUrl: "dashboard/index.html" }
#        }
        controller: 'dashboardCtrl'
      })
    $urlRouterProvider.otherwise('/dashboard');
])

automationServer = ($http) -> $http({method: 'GET', url: '/get_automation_server'})

automationSock = ($websocket, automationServer) ->
  stream = $websocket(automationServer.data.url)
  stream.onMessage( (message) ->
    console.log message.data
    console.log 'here'
  )




angular.module('controllers',[])
angular.module('services',[])
angular.module('directives',[])