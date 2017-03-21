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
      $scope.topFive = res.data
      console.log('success', res);
    })
    .catch(function(err) {
      console.log(err);
    })

    // PUBLIC VARIABLES & FUNCTIONS


    // PRIVATE VARIABLES & FUNCTIONS


  }
]);