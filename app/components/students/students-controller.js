angular.module('uosApp')
  .controller('StudentCtrl', function($scope, $rootScope, $location, Students) {
    
    $scope.students = Students;
    
    // Add new student functionality
    $scope.add = function() {
      var save = Students.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        type: $scope.type
      });
      
      if(save) {
        alert("yay!");
        $location.path('students');
      } else {
        alert("boo!");
      }
    };
    
    // Cancel button functionality
    $scope.go = function(path) {
      $rootScope.lastForm = "create";
      $location.path(path);
    };
  });