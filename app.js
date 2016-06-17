// this is the only var in the global namespace. 
var myApp = angular.module('myApp', []);

// declare a controller and inject some services
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

  $scope.name = 'Dan';

  $timeout(function() {
    $scope.name = 'Everybody';
  }, 3000);

}]);



