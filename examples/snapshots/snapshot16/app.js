var nameApp = angular.module('nameApp', ['ngRoute']);

nameApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'person-list.html',
			controller: 'NameListCtrl'
		}).
		when('/:firstName', {
			templateUrl: 'person-detail.html',
			controller: 'NameDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
});
	
nameApp.controller('NameListCtrl', function ($scope, $http){
	$http.get('persons.json').success(function(data) {
		$scope.persons = data;
	});
});

nameApp.controller('NameDetailCtrl', function ($scope, $routeParams){
	$scope.name = $routeParams.firstName;
});