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
  $scope.toggleField = function() { 
        if($scope.isWellnessOpen = !$scope.isWellnessOpen){
			$scope.isWellnessOpen = true;
		}else{
			$scope.isWellnessOpen = false;
			$scope.isthirdOpen = false;
			$scope.isfourthOpen = false;
			$scope.isScreen2 = false;
			$scope.isScreen3 = false;
			
		}
      };
	   $scope.toggleWell = function() { 
        if($scope.isthirdOpen = !$scope.isthirdOpen){
			$scope.isthirdOpen = true;
		}else{
			$scope.isthirdOpen = false;
			$scope.isfourthOpen = false;
			$scope.isScreen2 = false;
			$scope.isScreen3 = false;
         }
      };
	   $scope.toggleSensor = function() { 
        if($scope.isfourthOpen = !$scope.isfourthOpen){
			$scope.isfourthOpen = true;
		}else{
			
			$scope.isfourthOpen = false;
			$scope.isScreen3 = false;
         }
      };
	  
});

app.controller('DemoController', function($scope) {
  $scope.message = 'Demo Coming Soon';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'About Coming Soon';
});