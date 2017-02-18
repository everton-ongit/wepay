'use strict';

angular.module('myApp').
	config(['$stateProvider', '$urlRouterProvider', '$mdIconProvider', '$mdThemingProvider', 'ssSideNavSectionsProvider', 
		function config($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider, ssSideNavSectionsProvider){

			$urlRouterProvider.otherwise('/');

			$mdThemingProvider
      .theme('default')
      .primaryPalette('blue', {
          'default': '700'
	    });

			$stateProvider.
				state('login',{
					name: 'login',
					url:'/login',
					templateUrl: 'login/login.html',
					controller: 'LoginCtrl as login'
			})
				.state('home',{
					name: 'home',
					url:'/home',
					templateUrl: 'home/home.html',
					controller: 'HomeCtrl as home'
			})
				.state('search',{
					name: 'search',
					url:'/search',
					templateUrl: 'search/search.html',
					controller: 'SearchCtrl as search'
			})
				.state('transaction',{
					name: 'transaction',
					url:'/transaction',
					templateUrl: 'transaction/transaction.html',
					controller: 'TransactionCtrl as transaction'
			})
				.state('add',{
					name: 'add',
					url:'/add',
					templateUrl: 'add/add.html',
					controller: 'AddCtrl as add'
			});

			ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
			ssSideNavSectionsProvider.initWithSections([{
				id: 'Vendas',
				name: 'Vendas',
				type: 'heading',
				children: [{
					id: 'transaction',
					name: 'Realizar Venda',
					type: 'link',
					state: 'transaction',
				}]
			},
			{
				id: 'registre',
				name: 'Estoque',
				type: 'toggle',
				 pages: [{
                     id: 'product_toogle',
                     name: 'Cadastrar Produto',
                     state: 'product'
                 },
				 {
                     id: 'search_toogle',
                     name: 'Pesquisar Produto',
                     state: 'search'
                 }]
			},
		]);

/*  	 	 $mdIconProvider
       .icon('add', '././assets/img/icons/sets/add.svg', 24)
       .icon('hardware:keyboard_return', '././assets/img/icons/sets/ic_keyboard_return_black_24px.svg', 24)
       .defaultIconSet('././assets/img/icons/sets/not_exist.svg', 24);*/
		}
]);