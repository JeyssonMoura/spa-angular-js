var app = angular.module("spaApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "HomeController",
    })
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "AboutController",
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
      controller: "ContactController",
    })
    .otherwise({
      redirectTo: "/",
    });
});
