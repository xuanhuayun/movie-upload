'use strict';

/* App Module */
angular.module('port', [ 'ui.bootstrap','ngRoute']).config([ '$routeProvider',
                             function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html',
	}).when('/upload', {
		templateUrl : 'partials/upload.html',
		controller : 'UploadController',
	});

	
} ]);


