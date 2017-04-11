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
            templateUrl: 'layout.html'
            controller: 'mainCtrl'
          },
#          'vertical_nav': {
#            templateUrl: 'vertical-nav.html'
#            controller: 'verticalNav'
#          }
        }

        resolve: {
          automationServer: automationServer
#          automationSock: automationSock
        }
    }).state('dashboard',{
        parent: 'app'
        url: '/dashboard'
        templateUrl: "dashboard/index.html"
        controller: 'dashboardCtrl'
    }).state('scripts',{
        parent: 'app'
        url: '/scripts'
        templateUrl: "scripts/index.html"
        controller: 'scriptsCtrl'
    }).state('areas',{
        parent: 'app'
        url: '/areas'
        templateUrl: "areas/index.html"
        controller: 'areasCtrl'
    })


    $urlRouterProvider.otherwise('/dashboard');
])

automationServer = ($http) ->
  serverPromise = $http({method: 'GET', url: '/get_automation_server'})
#  obj = serverPromise.$promise
#  console.log obj
  return serverPromise.$promise

#automationSock = ($websocket, automationServer) ->
#  console.log "hello!"
#  stream = $websocket(automationServer.data.url)
#  stream.onMessage( (message) ->
#    console.log message.data
#    console.log 'here'
#  )


angular.module('controllers',[])
angular.module('services',[])
angular.module('directives',[])


$(document).ready ->
  $('html').addClass 'layout-pf layout-pf-fixed'
  # Initialize the vertical navigation
  $().setupVerticalNavigation true
  # fix scrollbar positioning
  $('.nav-pf-vertical').css 'padding-bottom', $('.list-group-fixed-bottom').children().outerHeight()