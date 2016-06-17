// this is the only var in the global namespace. 
var myApp = angular.module('myApp', []);

// declare a controller
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  $log.info($scope);

}]);



