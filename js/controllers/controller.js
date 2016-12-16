app.controller('HomeController', function($scope) {
	$scope.message = 'Hello from HomeController';
	$scope.toggleField = function() {
		
		if ($scope.isWellnessOpen = !$scope.isWellnessOpen) {
			$scope.isWellnessOpen = true;
		} else {
			$scope.isWellnessOpen = false;
			$scope.isthirdOpen = false;
			$scope.isfourthOpen = false;
			$scope.isScreen2 = false;
			$scope.isScreen3 = false;

		}
	};
	$scope.toggleWell = function() {
		if ($scope.isthirdOpen = !$scope.isthirdOpen) {
			$scope.isthirdOpen = true;
		} else {
			$scope.isthirdOpen = false;
			$scope.isfourthOpen = false;
			$scope.isScreen2 = false;
			$scope.isScreen3 = false;
		}
	};
	$scope.toggleSensor = function() {
		if ($scope.isfourthOpen = !$scope.isfourthOpen) {
			$scope.isfourthOpen = true;
		} else {

			$scope.isfourthOpen = false;
			$scope.isScreen3 = false;
		}
	};
	
	$scope.toggleScreen2 = function() {  
        if($scope.isScreen2 = !$scope.isScreen2){
			$scope.isScreen2 = true;
			$scope.isScreen3 = false;
		}else{
			
			$scope.isScreen2 = false;
			$scope.isScreen3 = false;
         }
      };
	  $scope.toggleScreen3 = function() {  
        if($scope.isScreen3 = !$scope.isScreen3){
			$scope.isScreen3 = true;
			$scope.isScreen2 = false;
		}else{
			$scope.isScreen3 = false;
			$scope.isScreen2 = false;
         }
      };

	$scope.chartOptions = {
		title : {
			text : 'Temperature data'
		},
		xAxis : {
			categories : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
					'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
		},

		series : [ {
			data : [ 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
					216.4, 194.1, 95.6, 54.4 ]
		} ]
	};

	// Sample data for pie chart
	$scope.pieData = [ {
		name : "Microsoft Internet Explorer",
		y : 56.33
	}, {
		name : "Chrome",
		y : 24.03,
		sliced : true,
		selected : true
	}, {
		name : "Firefox",
		y : 10.38
	}, {
		name : "Safari",
		y : 4.77
	}, {
		name : "Opera",
		y : 0.91
	}, {
		name : "Proprietary or Undetectable",
		y : 0.2
	} ]

});

app.controller('DemoController', function($scope) {
	$scope.message = 'Demo Coming Soon';
});

app.controller('AboutController', function($scope) {
	$scope.message = 'About Coming Soon';
});