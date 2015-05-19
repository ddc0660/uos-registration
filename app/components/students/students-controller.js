angular.module('uosApp')
  .controller('StudentCtrl', function($scope, $rootScope, $location, Students, principal) {
    
    $scope.students = Students;
    $scope.owner = principal.email;
    $scope.firstName = principal.firstName;
    
    //$filter('students');
    
    // Add new student functionality
    $scope.add = function() {
      var save = Students.$add({
        owner: principal.email,
        firstName: $scope.student.firstName,
        lastName: $scope.student.lastName,
        type: $scope.student.type
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