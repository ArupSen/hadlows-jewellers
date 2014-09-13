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
  .controller('DetailsController',['$scope', '$routeParams', function($scope, $routeParams){
    $scope.details = $scope.products[$routeParams.productID];
  }]);

