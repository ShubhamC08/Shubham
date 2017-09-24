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
	.otherwise('/',{
		redirectTo:"/"
	});
	
	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
});
