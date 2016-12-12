let localDataService = angular.module('localDataService', ['ngResource']);

let randomize = true;
let urlRandom = "";
if (randomize)
    urlRandom = "?" + +Math.random();

localDataService.factory('ResultData', ['$resource',
  function($resource){
      return $resource('app/moks/data.json' + urlRandom, {}, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
  }]);

localDataService.factory('Menu', ['$resource',
  function ($resource) {
      return $resource('app/moks/menu.json' + urlRandom, {}, {
          query: {
              method: 'GET',
              isArray: true
          }
      });
  }]);

localDataService.factory('Carousel-Data', ['$resource',
  function ($resource) {
      return $resource('app/moks/carousel.data.json' + urlRandom, {}, {
          query: {
              method: 'GET',
              isArray: true
          }
      });
  }]);

