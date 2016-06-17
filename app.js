// this is the only var in the global namespace. 
var myApp = angular.module('myApp', []);

// declare a controller and inject some services
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  $log.info($scope);

}]);



