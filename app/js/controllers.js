'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ProductsController', ['$scope', '$http', function($scope,$http) {
    $http.get('js/products.json').success(function(data){
      $scope.products = data;
    });
  }])
  .controller('AboutController', [function() {

  }])
  .controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('js/products.json').success(function(data){
      $scope.products = data;
      $scope.details = $routeParams.productID;
    });
}]);

