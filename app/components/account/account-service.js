app.factory('Accounts', function (fbURL, $firebaseArray) {
  return $firebaseArray(new Firebase(fbURL + 'accounts'));
});