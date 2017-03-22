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

    // PUBLIC VARIABLES & FUNCTIONS
    $scope.city = $stateParams.id;
    $scope.loading = true;
    $scope.getFlightData = getFlightData;
    //toggle sidebar
    $scope.showme = false;
    
    // Call yelp api on page load
    getCityData();
    getFlightData();

    // PRIVATE VARIABLES & FUNCTIONS
    function getFlightData() {
      FlightFactory.getCity($scope.city)
      .then(function(res){
        $scope.flights = res.data;
      })
      .catch(function(err){
        AlertsFactory.add('error', err.data.message);
      })
    }

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