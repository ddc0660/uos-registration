angular.module('uosApp')
 .controller('AccountCtrl', function ($scope, Registrants) {
  
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