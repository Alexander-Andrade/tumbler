app = angular.module('app',[
  'templates',
  'ui.router',
  'ngResource',
  'ngWebSocket',
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
  .run(($rootScope) ->
    $rootScope._ = window._
)

app.config([ '$stateProvider','$urlRouterProvider',
  ($stateProvider,$urlRouterProvider)->

])

angular.module('controllers',[])
angular.module('services',[])
angular.module('directives',[])