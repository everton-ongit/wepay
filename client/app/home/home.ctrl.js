(function(){
'use strict';
	angular.module('myApp').controller('HomeCtrl',['$scope', '$timeout', '$mdSidenav', 'ssSideNav', HomeCtrl]);

	function HomeCtrl($scope, $timeout, $mdSidenav, ssSideNav){

		$scope.$parent.title = "Bem Vindo";

		$scope.menu = ssSideNav;
    
    $timeout(function () {
        // force selection on child dropdown menu item and select its state too.
        ssSideNav.forceSelectionWithId('toogle_1');
    }, 1000 * 3);

		 		
 		$scope.toggleSidenav = function() {
			$mdSidenav('left').toggle();
		};

		$scope.onClickMenu = function () {
      $mdSidenav('left').toggle();
    };

	}

})();