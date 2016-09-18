angular.module('youTube', ['ngRoute'])
	   .config(function($routeProvider){
	   		$routeProvider
		   		.when('/',{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/0.html'
		   		})
		   		.when('/Trailer1',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/1.html'
		   		})
		   		.when('/Trailer2',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/2.html'
		   		})
		   		.when('/Trailer3',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/3.html'
		   		})
		   		.when('/Trailer4',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/4.html'
		   		})
		   		.when('/Trailer5',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/5.html'
		   		})
		   		.when('/error',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/6.html'
		   		})
		   		.otherwise({ redirectTo: '/error'});
	   });
