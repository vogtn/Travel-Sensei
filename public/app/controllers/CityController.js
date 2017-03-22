angular
.module('TravelSensei')
.controller('CityCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'YelpFactory',
  'AlertsFactory',
  function($scope, $state, $stateParams, YelpFactory, AlertsFactory) {
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