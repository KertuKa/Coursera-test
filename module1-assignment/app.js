(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items="";
    $scope.message="";

    $scope.displayMessage = function () {
      var totalItems = calculateAllEnteredItems($scope.items);
      if (totalItems.length === 0) {
        $scope.message="Please enter data first!";
      } else if (totalItems.length > 3) {
        $scope.message="Too much!";
      } else {
        $scope.message="Enjoy!"
      }
    };

    function calculateAllEnteredItems(string) {
      return string.split(',').filter(function(item) {
        return item.trim() !== '';
      });
    }
  }

})();
