angular.module('uosApp')
  .controller('StudentCtrl', function($scope, $rootScope, $location) {
    
    
    // Cancel button functionality
    $scope.go = function(path) {
      $rootScope.lastForm = "create";
      $location.path(path);
    };
  });