(function(){
	'use strict'

	angular
		.module('theProjectsApp')
		.directive('header', header);

	function header () {
			return {
				restrict: 'EA',
				templateUrl:'/app/shared/header/header.tmpl.html',
				replace: true
				// link: function (scope, iElement, iAttrs) {
					
				// }
			};
		}
})();