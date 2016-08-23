angular
  .module('app')
  .controller('homeCtrl', ['$scope','skills', function($scope, skills){
    $scope.title = 'Home';
    $scope.skills = skills;
  }]);