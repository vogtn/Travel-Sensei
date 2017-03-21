angular.module('ParallaxMod', ['duParallax'])
.controller('CitiesCtrl', [
	'$scope',
	'parallaxHelper', 
	function($scope, parallaxHelper){
    $scope.background = parallaxHelper.createAnimator(-0.4);
  }
]);