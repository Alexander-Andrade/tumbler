angular.module('directives').
  directive('areaCard', () ->
    return {
      templateUrl: 'directives/area-card/area-card.html',
      scope: {
        nAreas: '='
        nDevices: '='
      }
    }
  )