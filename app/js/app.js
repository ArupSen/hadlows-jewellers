'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/products.html', controller: 'ProductsController'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController'});
  $routeProvider.when('/details/:productID', {templateUrl: 'partials/details.html', controller: 'DetailsController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
