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
    YelpFactory.getCity('nagoya')
    .then(function(res) {
      $scope.topFive = res.data
      console.log('success', res);
    })
    .catch(function(err) {
      console.log(err);
    })

    FlightFactory.getCity('nagoya')
    .then(function(res){
      $scope.flights = res.data;
    })
    .catch(function(err){
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
        $scope.topFood = res.data.yelpFoodArr;
        $scope.topLocal = res.data.yelpLocalArr;
        console.log($scope.topFood);
        console.log($scope.topLocal);
        $scope.loading = false;
      })
      .catch(function(err) {
        AlertsFactory.add('error', err.data.message);
        $scope.loading = false;
      })
    }
  }
]);