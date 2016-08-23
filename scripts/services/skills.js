angular
  .module('app')
  .service('Skills', ['$http', function($http){

    this.getSkills = function(){ console.log('fired')
      return $http.get('data.json').then(function(response){
        return response.data;
      });
    };

  }]);

        
  