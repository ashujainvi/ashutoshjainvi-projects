(function(){
	'use strict'

	angular
		.module('theProjectsApp')
		.controller('mainSectionController', mainSectionController);

	function mainSectionController ($scope, projectsService){
        
        $scope.techno = {img:'techslogo.png'}
		var projects = projectsService.projects;

		$scope.latest= projects[0];
		$scope.webs = projects[1];
		$scope.data = projects[2];
		$scope.graphics = projects[3];

		$scope.latestEnabled = true;
		$scope.dataEnabled = true;
		$scope.webEnabled = true;
		$scope.graphicsEnabled = true;
        
	}
})();