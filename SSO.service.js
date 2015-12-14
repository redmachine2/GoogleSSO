/**
 * Created by Jason on 12/10/2015.
 */
(function () {
	'use strict';

	angular
		.module('GoogleSSO')
		.service('SSO', function($q) {
			this.defer = $q.defer();
			this.loggedIn = this.defer.promise;
		});

})();


