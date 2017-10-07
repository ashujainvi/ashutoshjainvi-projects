(function(){
	'use strict'

	angular
		.module('theProjectsApp')
		.directive('mainSection', mainSection);

	function mainSection () {
			return {
				restrict: 'EA',
				templateUrl:'/app/components/main-section.tmpl.html',
				controller: 'mainSectionController',
				replace: true
				// link: function (scope, iElement, iAttrs) {
					
				// }
			};
		}
})();