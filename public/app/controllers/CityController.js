angular
.module('TravelSensei')
.controller('CityCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'YelpFactory',
  function($scope, $state, $stateParams, YelpFactory) {
    YelpFactory.getCity('nagoya')
    .then(function(res) {
      $scope.topFood = res.data.yelpFoodArr
      $scope.topLocal = res.data.yelpLocalArr
      console.log('success', res);
    })
    .catch(function(err) {
      console.log(err);   
    })

    // PUBLIC VARIABLES & FUNCTIONS


    // PRIVATE VARIABLES & FUNCTIONS


  }
]);