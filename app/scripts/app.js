var app = angular.module("uosApp", ["ngRoute", "firebase"]);

app.value('fbURL', 'https://amber-fire-7526.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      title: 'Main Title'
    })
    .when('/edit/:id', {
      templateUrl: 'views/edit.html',
      controller: 'EditCtrl',
      title: 'Edit Title'
    })
    .when('/courses', {
      templateUrl: 'views/courses.html',
      controller: 'CoursesCtrl',
      title: 'Courses'
    })
    .otherwise({
      redirectTo: '/main'
    });
    
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});


app.factory('Registrants', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'registrants'));
});

app.factory('Courses', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'courses'));
});

app.controller('MainCtrl', function ($scope, Registrants) {
  
  $scope.registrants = Registrants;
  $scope.predicate = '-firstName';
  
  // add registrant
  $scope.add = function() {
    var save = Registrants.$add({
      email: $scope.email,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      address1: $scope.address1,
      address2: $scope.address2,
      city: $scope.city,
      state: $scope.state,
      zip: $scope.zip,
      phone: $scope.phone,
      unitType: $scope.unitType,
      unitNumber: $scope.unitNumber
    });
    
    $scope.email = '';
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.address1 = '';
    $scope.address2 = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
    $scope.phone = '';
    $scope.unitNumber = '';
  
    if(save) {
      alert('saved successfully');
    } else {
      alert('uh oh');
    }
  };
  
  // remove registrant
  $scope.remove = function (id) {
    var removed = Registrants.$remove(id);
  };
  
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