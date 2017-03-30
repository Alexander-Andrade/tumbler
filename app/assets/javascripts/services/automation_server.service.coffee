angular.module('services').
  factory('automationServerService', ['$resource', ($resource)->
    return $resource('/recipes/:recipeId', {recipeId: '@id', format: 'json'},
      {
        'save': {method: 'PUT'},
        'create': {method: 'POST'}
      })
  ])