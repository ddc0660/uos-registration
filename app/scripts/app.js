var app = angular.module("uosApp", ["ngRoute", "firebase"]);

app.value('fbURL', 'https://amber-fire-7526.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
/*    
    .when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      title: 'Main Title'
    })
*/
    .when('/edit/:id', {
      templateUrl: 'views/edit.html',
      controller: 'EditCtrl',
      title: 'Edit Title'
    });
/*
    .otherwise({
      redirectTo: '/main'
    });
*/
});


app.factory('Registrants', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'registrants'));
});

app.controller('MainCtrl', function ($scope, Registrants) {
  
  $scope.registrants = Registrants;
  
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
});


app.controller('EditCtrl', function ($scope, $location, $routeParams, $firebaseObject, fbURL) {
  var registrantURL = new Firebase(fbURL + $routeParams.id);
  $scope.Registrant = $firebaseObject(registrantURL);
  
  $scope.edit = function() {
    $scope.registrant.$save();
    $location.path('/');
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





/*
app.factory("Registrant", ["$firebaseObject",
    function($firebaseObject) {
      return function() {
        // create a reference to the Firebase where we will store our data
        var ref = new Firebase("https://amber-fire-7526.firebaseio.com/");
        var registrantRef = ref.child("registrants");
        
        // return it as a synchronized object
        return $firebaseObject(registrantRef);
      };
    }
  ]);
*/


/*
app.controller("RegistrantController", function RegistrantController($scope, $firebase) {
  var url = 'https://amber-fire-7526.firebaseio.com/'; 
  var fireRef = new Firebase(url);
  
  $scope.addRegistrant = function () {
    var newRegistrant = $scope.registrant;
    $scope.registrants.$add({
      email: newRegistrant.email,
      firstName: newRegistrant.firstName,
      lastName: newRegistrant.lastName
    });
    alert('Registrant added to Firebase!');
  };
  
  $scope.registrants = $firebaseArray(fireRef);
  
});
*/





/*
["$scope", "Registrant",
 
  
  
  
  
  
  function($scope, Registrant) {
    // put our registrant in the scope for the use in DOM
    $scope.registrant = Registrant();
    
    
    $scope.saveRegistrant = function() {
      // save registrant here
      // calling $save() on the synchronized object syncs all data bask to Firebase
      $scope.registrant.$save().then(function() {
        //$scope.registrant.email = "";
        alert('Registrant saved to Firebase!');
      }).catch(function(error){
        alert('Error!');
      });
    };
  }
]);*/