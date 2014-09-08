'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ProductsController', ['$scope', function($scope) {
    // products holds data in here for now
    $scope.products = [
  {imgPath: 'MS-2014-1-01'},
  {imgPath: 'MS-2014-1-02'},
  {imgPath: 'MS-2014-1-03'},
  {imgPath: 'MS-2014-1-04'},
  {imgPath: 'MS-2014-1-05'},
  {imgPath: 'MS-2014-1-06'},
  {imgPath: 'MS-2014-1-07'},
  {imgPath: 'MS-2014-1-08'},
  {imgPath: 'MS-2014-1-09'},
  {imgPath: 'MS-2014-1-10'},
  {imgPath: 'MS-2014-1-11'},
  {imgPath: 'MS-2014-1-12'},
  {imgPath: 'MS-2014-1-13'},
  {imgPath: 'MS-2014-1-14'},
  {imgPath: 'MS-2014-1-15'},
  {imgPath: 'MS-2014-1-16'}
    ];

  }])
  .controller('AboutController', [function() {

  }]);
