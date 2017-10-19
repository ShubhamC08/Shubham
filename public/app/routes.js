angular.module('appRoutes',['ngRoute'])
	
.config(function($routeProvider,$locationProvider) {
	console.log('testing our routes');
	$routeProvider
	.when('/',{
		templateUrl:"app/views/pages/home.html",
		controller:"displayController"
	})
	.when('/add',{
		templateUrl:"app/views/pages/add.html",
		controller:"addController",
		controllerAs:"adding"
	})
	.when('/sports',{
		templateUrl:"app/views/pages/sports.html",
		controller:"sportController"

	})
	.when('/view',{
		templateUrl:"app/views/pages/view.html",
		controller:"displayController"
	})
	.when('/details/:id',{
		templateUrl:"app/views/pages/detail.html",
		controller:"idController",
		controller:'deleteController'
	})
	.when('/edit/:id',{
		templateUrl:"app/views/pages/edit.html",
		controller:"editController"
		
	})
	.when('/delete/:id',{
		controller:'deleteController'
	})
	.otherwise('/',{
		redirectTo:"/"
	});
	
	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
});
