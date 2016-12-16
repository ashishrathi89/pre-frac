var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/demo', {
    templateUrl : 'pages/demo.html',
    controller  : 'DemoController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('DemoController', function($scope) {
  $scope.message = 'Demo Coming Soon';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'About Coming Soon';
});