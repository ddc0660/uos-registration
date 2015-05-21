app.factory('Courses', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'courses'));
});