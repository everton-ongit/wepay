(function(){
'use strict';
	angular.module('myApp').controller('HomeCtrl',['$scope', '$timeout', 'ssSideNav', HomeCtrl]);

	function HomeCtrl($scope, $timeout, ssSideNav){
		
		$scope.menu = ssSideNav;
    
    $timeout(function () {
        // force selection on child dropdown menu item and select its state too.
        ssSideNav.forceSelectionWithId('toogle_1');
    }, 1000 * 3);

		 		
 		$scope.toggleSidenav = function() {
			$mdSidenav('left').toggle();
		};

		$scope.list = [
			{
				name: 'agua', value: 200.00, description: 'primeira transação'
			},
			{
				name: 'luz', value: 250.00, description: 'segunda transação'
			},
			{
				name: 'telefone', value: 300.00, description: 'terceira transação'
			},
			{
				name: 'casa', value: 350.00, description: 'quarta transação'
			}
		]

	}

})();