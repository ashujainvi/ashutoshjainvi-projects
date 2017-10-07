(function(){
	'use strict';

	angular
		.module('theProjectsApp')
		.config(config);

	function config ($routeProvider){
		$routeProvider
			.when('/home',{
				templateUrl: '/app/components/main-section.tmpl.html',
			})
			.otherwise({ redirectTo: '/home' });	
	}
})();