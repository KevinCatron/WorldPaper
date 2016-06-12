worldPaper.controller("mainController", ['$scope', function($scope){

  $scope.search = '';

  }]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("searchStories", ['$scope', '$http', '$location', function($scope, $http, $location){
//PARSES THE JSON FOR THE SEARCH FUNCTION

  $scope.submit = function(){

    $location.path('/search');
    $scope.stories = [];
    $scope.searchTerm = 'VIEWING: '+ $scope.search;


  var urlSearch = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  var prefix = "http://static01.nyt.com/";

  $http({
    method: 'GET',
    url: urlSearch,
    params: {
      q: $scope.search,
      apikey: "0ef08d9402ae481c91e3184c3817bf02"
    }
  }).then(function successCallback(response) {
      angular.forEach(response.data.response.docs, function(child){
        $scope.stories.push(child);

      });

  }, function errorCallback(response) {
      console.log("There was an error");
    });
    $scope.search = '';//SETS THE INPUT TO A BLANK STATE AFTER SEARCH IS INITIALIZED.
  }
}]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("technologySearch", ["$scope", "$http", "$location", function($scope, $http, $location){
//PARSES THE JSON FOR THE TECHNOLOGY NEWS
$scope.techSubmit = function(){
  $location.path('/technology');
  $scope.techSearch = [];
  $scope.techTitle = 'VIEWING: TRENDING TECHNOLOGY'

  var url = "https://api.nytimes.com/svc/topstories/v1/technology.json";

  $http({
    method: 'GET',
    url: url,
    params: {
      apikey: '0ef08d9402ae481c91e3184c3817bf02'
    }
  }).then(function successCallback(response){
    angular.forEach(response.data.results, function(child){
      $scope.techSearch.push(child);


    });

  }, function errorCallback(response){
    console.log("There was an error");
  });

};

}]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("businessSearch", ["$scope", "$http", "$location", function($scope, $http, $location){
//PARSES THE JSON FOR THE BUSINESS NEWS
$scope.businessSubmit = function(){
  $location.path('/business');
  $scope.businessSearch = [];
  $scope.businessTitle = 'VIEWING: TRENDING BUSINESS'

  var url = "https://api.nytimes.com/svc/topstories/v1/business.json";

  $http({
    method: 'GET',
    url: url,
    params: {
      apikey: '0ef08d9402ae481c91e3184c3817bf02'
    }
  }).then(function successCallback(response){
    angular.forEach(response.data.results, function(child){
      $scope.businessSearch.push(child);
      console.log(child)

    });

  }, function errorCallback(response){
    console.log("There was an error");
  });

};

}]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("sportsSearch", ["$scope", "$http", "$location", function($scope, $http, $location){
//PARSES THE JSON FOR THE SPORTS NEWS
$scope.sportsSubmit = function(){
  $location.path('/sports');
  $scope.sportsSearch = [];
  $scope.sportsTitle = 'VIEWING: TRENDING SPORTS'

  var url = "https://api.nytimes.com/svc/topstories/v1/sports.json";

  $http({
    method: 'GET',
    url: url,
    params: {
      apikey: '0ef08d9402ae481c91e3184c3817bf02'
    }
  }).then(function successCallback(response){
    angular.forEach(response.data.results, function(child){
      $scope.sportsSearch.push(child);
      console.log(child);
    });


  }, function errorCallback(response){
    console.log("There was an error");
  });

};

}]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("travelSearch", ["$scope", "$http", "$location", function($scope, $http, $location){
//PARSES THE JSON FOR THE TRAVEL NEWS
$scope.travelSubmit = function(){
  $location.path('/travel');
  $scope.travelSearch = [];
  $scope.travelTitle = 'VIEWING: TRENDING TRAVELS'

  var url = "https://api.nytimes.com/svc/topstories/v1/travel.json";

  $http({
    method: 'GET',
    url: url,
    params: {
      apikey: '0ef08d9402ae481c91e3184c3817bf02'
    }
  }).then(function successCallback(response){
    angular.forEach(response.data.results, function(child){
      $scope.travelSearch.push(child);
      console.log(child);
    });

  }, function errorCallback(response){
    console.log("There was an error");
  });

};

}]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("worldSearch", ["$scope", "$http", "$location", function($scope, $http, $location){
//PARSES THE JSON FOR THE WORLD NEWS
$scope.worldSubmit = function(){
  $location.path('/world');
  $scope.worldSearch = [];
  $scope.worldTitle = 'VIEWING: TRENDING WORLD'

  var url = "https://api.nytimes.com/svc/topstories/v1/world.json";

  $http({
    method: 'GET',
    url: url,
    params: {
      apikey: '0ef08d9402ae481c91e3184c3817bf02'
    }
  }).then(function successCallback(response){
    angular.forEach(response.data.results, function(child){
      $scope.worldSearch.push(child);
    
    });

  }, function errorCallback(response){
    console.log("There was an error");
  });

};

}]);
/////////////////////////////////////////////////////////////////////////////////////////////
worldPaper.controller("fashionSearch", ["$scope", "$http", "$location", function($scope, $http, $location){
//PARSES THE JSON FOR THE FASHION NEWS
$scope.fashionSubmit = function(){
  $location.path('/fashion');
  $scope.fashionSearch = [];
  $scope.img = [];
  $scope.fashionTitle = 'VIEWING: TRENDING FASHION'

  var url = "https://api.nytimes.com/svc/topstories/v1/fashion.json";

  $http({
    method: 'GET',
    url: url,
    params: {
      apikey: '0ef08d9402ae481c91e3184c3817bf02'
    }
  }).then(function successCallback(response){
    angular.forEach(response.data.results, function(child){
      $scope.fashionSearch.push(child);
console.log(child)
    });

  }, function errorCallback(response){
    console.log("There was an error");
  });

};

}]);
