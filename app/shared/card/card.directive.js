(function(){
	'use strict'

	angular
		.module('theProjectsApp')
		.directive('card', card);

	function card () {
			return {
				restrict: 'EA',
				templateUrl:'/app/shared/card/card.tmpl.html',
				replace: true,
				controller: 'cardController',
				scope:{
					project: '='
				}
				// link: function (scope, iElement, iAttrs) {
					
				// }
			};
		}
})();