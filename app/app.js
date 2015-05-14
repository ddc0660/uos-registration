var app = angular.module("uosApp", ["ngRoute", "firebase"]);

app.value('fbURL', 'https://amber-fire-7526.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/account', {
      templateUrl: 'components/account/main.html',
      controller: 'AccountCtrl',
      title: 'Main Title'
    })
    .when('/account/:id', {
      templateUrl: 'componenets/account/edit.html',
      controller: 'EditCtrl',
      title: 'Edit Title'
    })
    .when('/students', {
      templateUrl: 'components/students/students.html',
      //controller: 'StudentCtrl',
      title: 'Students'
    })
    .when('/students/create', {
      templateUrl: 'components/students/student-detail.html',
      controller: 'StudentCtrl',
      title: 'Create Student'
    })
    .when('/courses', {
      templateUrl: 'components/courses/courses.html',
      controller: 'CoursesCtrl',
      title: 'Courses'
    })
    .otherwise({
      redirectTo: '/account'
    });
    
    
    // Pretty urls can be enabled with html5Mode, but requires server-side
    // configuration. Refer here for more details...
    // http://stackoverflow.com/questions/24730654/
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});




app.factory('Courses', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'courses'));
});

app.controller('EditCtrl', function ($scope, $rootScope, $location, $routeParams, $firebaseObject, fbURL) {
  var registrantURL = new Firebase(    fbURL + 'registrants/' + $routeParams.id);
  $scope.registrant = $firebaseObject(registrantURL);
  
  $scope.edit = function() {
    $scope.registrant.$save();
    $location.path('/');
  };
  
  // cancel button function
  $scope.go = function (path) {
    // indicate last form viewed
    $rootScope.lastForm = "edit";
    // send user to path provided in ng-click
    $location.path(path);
  };
  
});


app.controller('CoursesCtrl', function ($scope, $rootScope, $location, $routeParams, Courses) {
  $scope.courses = Courses;
  
  $scope.register = function() {
  
  };
});

/*

// TODO: enable this when going for SPA

myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // test for current route
        if(current.$$route) {
            // Set current page title 
            $rootScope.title = current.$$route.title;
        }
    });
}]);

*/