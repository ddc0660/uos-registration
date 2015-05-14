app.factory('Students', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'students'));
});