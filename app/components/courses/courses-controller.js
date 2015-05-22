angular.module('uosApp')
.controller('CoursesCtrl', function ($scope, $rootScope, $location, $routeParams, Student, Courses) {
  
  $scope.student = Student.getById($routeParams.id);
  $scope.courses = Courses;
  
  // register function
  $scope.register = function() {
  
    // TODO traverse the checked radio buttons and save registrations to the database
    
  };
  
});