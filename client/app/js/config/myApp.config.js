'use strict';

angular.module('myApp').
	config(['$stateProvider', '$urlRouterProvider', '$mdIconProvider', '$mdThemingProvider',
		function config($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {

			$urlRouterProvider.otherwise('/');

			$mdThemingProvider
				.theme('default')
				.primaryPalette('green', {
					'default': '500'
				});

			$stateProvider.
				state('login', {
					name: 'login',
					url: '/login',
					templateUrl: 'login/login.html',
					controller: 'LoginCtrl as login'
				})
				.state('home', {
					name: '/',
					url: '/home',
					templateUrl: 'home/home.html',
					controller: 'HomeCtrl as home'
				})
				.state('home.start', {
					url: '/start',
					templateUrl: 'start/start.html',
					controller: 'StartCtrl as start'
				})
				.state('home.add', {
					url: '/add',
					templateUrl: 'add/add.html',
					controller: 'AddCtrl as add'
				})
				.state('home.search', {
					name: 'search',
					url: '/search',
					templateUrl: 'search/search.html',
					controller: 'SearchCtrl as search'
				})
				.state('home.transaction', {
					name: 'transaction',
					url: '/transaction',
					templateUrl: 'transaction/transaction.html',
					controller: 'TransactionCtrl as transaction'
				});

			// ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
			// ssSideNavSectionsProvider.initWithSections([{
			// 	id: 'wePay',
			// 	name: 'We Pay',
			// 	type: 'heading',
			// 	children: [{
			// 		id: 'home_start',
			// 		name: 'Início',
			// 		type: 'link',
			// 		state: 'home.start',
			// 	}, {
			// 		id: 'home_add',
			// 		name: 'Adicionar',
			// 		type: 'link',
			// 		state: 'home.add',
			// 	}],
			// }
			// ]);

			$mdIconProvider
				.icon('menu', '././assets/img/icons/sets/menu.svg', 24)
				.icon('backspace', '././assets/img/icons/sets/backspace.svg', 24)
				.icon('search', '././assets/img/icons/sets/search.svg', 24)

			/*  	 	 $mdIconProvider
				   .icon('add', '././assets/img/icons/sets/add.svg', 24)
				   .icon('hardware:keyboard_return', '././assets/img/icons/sets/ic_keyboard_return_black_24px.svg', 24)
				   .defaultIconSet('././assets/img/icons/sets/not_exist.svg', 24);*/
		}
	]);