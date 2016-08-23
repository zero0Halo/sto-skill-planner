angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'scripts/templates/home.html',
        controller: 'homeCtrl',
        resolve: {
          skills: ['$http', function($http){
            return $http.get('data.json').then(function(response){
              return response.data;
            })
          }]
        }
      })
      .state('about',{
        url: '/about',
        templateUrl: 'scripts/templates/about.html',
        controller: 'aboutCtrl'
      });    
  }]);