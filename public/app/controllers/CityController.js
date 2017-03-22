angular
.module('TravelSensei')
.controller('CityCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'YelpFactory',
  'AlertsFactory',
  function($scope, $state, $stateParams, YelpFactory, AlertsFactory) {
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
    $scope.city = $stateParams.id;
    $scope.loading = true;
    
    // Call yelp api on page load
    getCityData();


    // PRIVATE VARIABLES & FUNCTIONS

    function getCityData() { 
      YelpFactory.getCity($scope.city)
      .then(function(res) {
        $scope.topFive = res.data;
        $scope.loading = false;
      })
      .catch(function(err) {
        AlertsFactory.add('error', err.data.message);
        $scope.loading = false;
      })
    }
  }
]);