// this is without $scope
myApp.controller('mainController',['$http','BookService',function($http,BookService) {

  //create a context
  var main = this;

  this.posts=[];
  this.all=[];


  // i knew the result is going to be array, so i declared an empty array to initialize
  
  this.loadAllDetails = function(){

    BookService.getAllBooks()
     
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    //console.log(response.data.data);
      console.log(response);
      for(i in response.data){
        (main.all).push(response.data[i]);
      }

    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert("some error occurred. Check the console.");
    //return console.log(response);
    $location.path('/error');

    });

    BookService.getAllHouses()
     
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      for(i in response.data){
        (main.all).push(response.data[i]);
      } 

    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert("some error occurred. Check the console.");
    //return console.log(response);
    $location.path('/error');

    });

    BookService.getAllCharacters()
     
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    //console.log(response.data.data);
      for(i in response.data){
        (main.all).push(response.data[i]);
      } 
        
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert("some error occurred. Check the console.");
    //return console.log(response);
    $location.path('/error');

    });
      
      
 }// end loadAllDetails

}]); // end controller