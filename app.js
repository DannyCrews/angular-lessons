// this is the only var in the global namespace. 
var myApp = angular.module('myApp', []);

// declare a controller and inject some services
myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

}]);



