angular.module('usersControllers',[])
.controller('addController',function($http){
	this.enter=function(addData){
		console.log('Submitted');
		console.log(this.addData);
		$http.post('/api/sports',this.addData);
	};
})
.controller('displayController',function($scope,$http){
			$scope.Sport = function(){
		$http.get('/api/home').then(function(response){
			$scope.sports = response.data;
		});			
}

});

