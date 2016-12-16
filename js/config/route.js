// Routing Information 		
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'HomeController'
	})

	.when('/demo', {
		templateUrl : 'pages/demo.html',
		controller : 'DemoController'
	}).when('/secon-demo', {
		templateUrl : 'pages/homebk.html',
		controller : 'HomeController'
	})

	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'AboutController'
	})

	.otherwise({
		redirectTo : '/'
	});
});