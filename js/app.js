var app = angular.module('myApp', ['ngRoute']);
// Directive for generic chart, pass in chart options
	app.directive('hcChart', function () {
			return {
				restrict: 'E',
				template: '<div></div>',
				scope: {
					options: '='
				},
				link: function (scope, element) {
					Highcharts.chart(element[0], scope.options);
				}
			};
		})
		// Directive for pie charts, pass in title and data only    
		.directive('hcPieChart', function () {
			return {
				restrict: 'E',
				template: '<div></div>',
				scope: {
					title: '@',
					data: '='
				},
				link: function (scope, element) {
					Highcharts.chart(element[0], {
						chart: {
							type: 'pie'
						},
						title: {
							text: scope.title
						},
						plotOptions: {
							pie: {
								allowPointSelect: true,
								cursor: 'pointer',
								dataLabels: {
									enabled: true,
									format: '<b>{point.name}</b>: {point.percentage:.1f} %'
								}
							}
						},
						series: [{
							data: scope.data
						}]
					});
				}
			};
		});
		
// Routing Information 		
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
  .when('/secon-demo', {
    templateUrl : 'pages/homebk.html',
    controller  : 'HomeController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

// Controller 
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
	  
	   $scope.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },

                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
                };

                // Sample data for pie chart
                $scope.pieData = [{
                        name: "Microsoft Internet Explorer",
                        y: 56.33
                    }, {
                        name: "Chrome",
                        y: 24.03,
                        sliced: true,
                        selected: true
                    }, {
                        name: "Firefox",
                        y: 10.38
                    }, {
                        name: "Safari",
                        y: 4.77
                    }, {
                        name: "Opera",
                        y: 0.91
                    }, {
                        name: "Proprietary or Undetectable",
                        y: 0.2
                }]
	  
});

app.controller('DemoController', function($scope) {
  $scope.message = 'Demo Coming Soon';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'About Coming Soon';
});