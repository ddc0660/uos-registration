describe("Courses Controller", function() {
  
  beforeEach(module('uosApp'));
  
  var $controller;
  
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  it("exists", function() {
    expect($controller).toBeDefined();
  });
  
  it("can tell if seats are available", function() {
    var course = new course({seats:1});
    
    var $scope, controller; 
    controller = $controller('CoursesCtrl', {$scope: $scope});
    
    expect($scope.hasSeatsAvailable(course)).toBeTrue();
    
  });
  
  describe("registers students", function() {
    var $scope, controller; 
    
    beforeEach(function() {
      $scope = {};
      controller = $controller('CoursesCtrl', {$scope: $scope});
    });
    
    it("exists", function() {
      expect($scope.register).toBeDefined();
    });
    
    it("only if seats are available", function() {
      
    });
    
  });
  
  
  
  /*
  describe('$scope.grade', function() {
     it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('CoursesCtrl', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
    */
    
    
});