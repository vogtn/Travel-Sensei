angular.module('ParallaxMod', ['duParallax'])
.controller('CitiesCtrl', [
	'$scope',
	'parallaxHelper',
	'$location' ,
	function($scope, parallaxHelper, $location){
	// $scope.click = function(){
	// 	$location.path('')
	// }
    $scope.background = parallaxHelper.createAnimator(-0.6);
  }
])
