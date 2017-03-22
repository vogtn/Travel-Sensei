angular
.module('TravelSensei')
.controller('CityCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'YelpFactory',
  'AlertsFactory',
  'FlightFactory',
  function($scope, $state, $stateParams, YelpFactory, AlertsFactory, FlightFactory) {

    FlightFactory.getCity($scope.city)
    .then(function(res){
      $scope.flights = res.data;
    })
    .catch(function(err){
      AlertsFactory.add('error', err.data.message);
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
        $scope.topFood = res.data.yelpFoodArr;
        $scope.topLocal = res.data.yelpLocalArr;
        $scope.loading = false;
      })
      .catch(function(err) {
        AlertsFactory.add('error', err.data.message);
        $scope.loading = false;
      })
    }
  }
]);