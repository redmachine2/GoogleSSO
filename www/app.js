/**
 * Created by Jason on 12/10/2015.
 */
angular.module('sample', ['GoogleSSO'])
	.controller('ExampleCtrl', function (SSO) {
		var vm = this;
		vm.greeting = "Hello";
		vm.signedIn = false;

		//$scope.$on('event:gsso-success', function(event, authResult){
		//	success(authResult);
		//	vm.signedIn = true;
		//	$rootScope.$apply();
		//});
		//
		//$scope.$on('event:gsso-failure', function(event, authResult){
		//	failure();
		//});

		SSO.loggedIn.then(function(authResult){
			success(authResult);

		}).catch(function(){
			failure();
		});

		function success(authResult){
			console.log('signed in', authResult);
			vm.signedIn = true;
			vm.user = authResult.zt;
			console.log(vm.user.zt);
		}

		function failure(){
			vm.signedIn = false;
			console.log('not signed in');
		}
	});