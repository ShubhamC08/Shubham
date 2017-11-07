angular.module('appRoutes',['ngRoute'])
	
.config(function($routeProvider,$locationProvider) {
	console.log('testing our routes');
	$routeProvider
	.when('/',{
		templateUrl:"app/views/pages/home.html",
		controller:"displayController"
	})
	.when('/About',{
		templateUrl:"app/views/pages/About.html",
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
	.when('/world',{
		templateUrl:"app/views/pages/world.html",
		controller:"worldController"

	})
	.when('/entertainment',{
		templateUrl:"app/views/pages/entertainment.html",
		controller:"entertainmentController"

	})
	.when('/view',{
		templateUrl:"app/views/pages/view.html",
		controller:"displayController"
	})
	.when('/details/:id',{
		templateUrl:"app/views/pages/detail.html",
		controller:"idController"
		
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
