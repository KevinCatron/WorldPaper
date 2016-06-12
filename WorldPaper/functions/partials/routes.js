//ROUTES
worldPaper.config(['$routeProvider', function($routeProvider){

$routeProvider

  .when('/search', {
    templateUrl: 'templates/search.html',
    controller: 'searchStories'
  })

  .when('/technology', {
    templateUrl: 'templates/techsearch.html',
    controller: 'technologySearch'
  })

  .when('/business', {
    templateUrl: 'templates/business.html',
    controller: 'businessSearch'
  })

  .when('/sports', {
    templateUrl: 'templates/sports.html',
    controller: 'sportsSearch'
  })

  .when('/travel', {
    templateUrl: 'templates/travel.html',
    controller: 'travelSearch'
  })

  .when('/world', {
    templateUrl: 'templates/world.html',
    controller: 'worldSearch'
  })

  .when('/fashion', {
    templateUrl: 'templates/fashion.html',
    controller: 'fashionSearch'
  })

}]);
