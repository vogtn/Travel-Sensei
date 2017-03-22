angular
.module('TravelSensei')
.controller('CityCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'YelpFactory',
  'FlightFactory',
  function($scope, $state, $stateParams, YelpFactory, FlightFactory) {
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


    // PRIVATE VARIABLES & FUNCTIONS


  }
]);