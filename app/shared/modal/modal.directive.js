(function(){
	'use strict'

	angular
		.module('theProjectsApp')
		.directive('modal', modal);

	function modal () {
			return {
				restrict: 'EA',
				templateUrl:'/app/shared/modal/modal.tmpl.html',
				replace: true,
				scope:{
					project: "="
				}
				// link: function (scope, iElement, iAttrs) {
					
				// }
			};
		}
})();