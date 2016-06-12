//DIRECTIVES
worldPaper.directive('search', function(){

  return{
    restrict: 'E',
    templateUrl: 'templates/search.html',
    replace: true
  }

});

worldPaper.directive('techsearch', function(){

  return{
    restrict: 'E',
    templateUrl: 'templates/techsearch.html',
    replace: true
  }

});


//I DONT NEED TO USE DIRECTIVES BECAUSE MY ROUTES SET THE TEMPLATE INTO NG-VIEW
