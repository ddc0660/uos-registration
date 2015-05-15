angular.module('uosApp')
 .controller('AccountCtrl', function ($scope, $location, Accounts, principal) {
  
  $scope.accounts = Accounts;
  $scope.predicate = '-firstName';
  
  // add registrant
  $scope.add = function() {
    var save = Accounts.$add({
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
    
    if(save) {
      
      principal.email = $scope.email;
      
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
      
      alert('saved successfully');
      $location.path('/students');
    } else {
      alert('uh oh');
    }
  };
  
  // remove registrant
  $scope.remove = function (id) {
    var removed = Accounts.$remove(id);
  };
  
});