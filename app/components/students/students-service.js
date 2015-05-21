app.factory('Students', function (fbURL, $firebaseArray) {
  // returns all students in an array
  return $firebaseArray(new Firebase(fbURL + 'students'));
});

app.factory('Student', function (fbURL, $firebaseObject) {
  return {
    
    // function on Student to return a single Student by Firebase Id
    getById: function(id) {
      return $firebaseObject(new Firebase(fbURL + 'students/' + id));
    } 
  };
});