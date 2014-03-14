'use strict';


angular.module('port').controller('UploadController', 
		[ '$scope', '$routeParams',function($scope, $routeParams) {
			$scope.parentproduct = 'tt';
			$scope.parentproducts = ['Game Of Thrones', 'Game Boy', 'Flower Garden', 'True Blood'];	
}]);