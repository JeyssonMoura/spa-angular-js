app.controller("MainController", function ($scope, $window) {
  $scope.StatusConexao = $window.navigator.onLine;

  $window.addEventListener("offline", function () {
    $scope.$apply(function () {
      $scope.StatusConexao = false;
    });
  });

  $window.addEventListener("online", function () {
    $scope.$apply(function () {
      $scope.StatusConexao = true;
    });
  });

  $scope.$watch("StatusConexao", function (newValue, oldValue) {
    if (newValue) {
      console.log("Online");
    } else {
      console.log("Offline");
    }
  });
});
