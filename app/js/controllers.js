'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ProductsController', ['$scope', '$http', function($scope,$http) {
    $http.get('js/products.json').success(function(data){
      $scope.products = data;
    });
  }])
//  .controller('AboutController', [function() {
//
//  }])
  .controller('DetailsController',['$scope', '$routeParams', function($scope, $routeParams){
    //$scope.details = $scope.products[$routeParams.productID];
    var id = $routeParams.productID;
    var detailNum;
   $scope.products.forEach(function(target) {
      if (target[0] === id) {
        detailNum = $scope.products.indexOf(target);
      } 
    })
    $scope.details = $scope.products[detailNum][1];
    $scope.detailNum = detailNum;
  }]);

