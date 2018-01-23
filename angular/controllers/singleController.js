// this is without $scope
myApp.controller('singleController',['$http','$routeParams','BookService',function($http,$routeParams,BookService) {

  //create a context
  var main = this;

  this.book=[];
  this.house=[];
  this.character=[];

  this.type=$routeParams.type;
  this.number=$routeParams.number;


  this.loadSingle = function(){
    if (this.type == 'books') {

      BookService.viewAllBooks(this.type,this.number)
        .then(function successCallback(response){

          console.log(response);
          main.book=response.data;

        },function errorCallback(response){
          alert("some error occurred. Check the console.");
          console.log(response);
        });
      
    }
  
    if (this.type == 'houses') {

        BookService.viewAllHouses(this.type,this.number)
          .then(function successCallback(response){

            console.log(response);
            main.house=response.data;

          },function errorCallback(response){
            alert("some error occurred. Check the console.");
            console.log(response);
          });
        
      }

    if (this.type == 'characters') {

        BookService.viewAllCharacters(this.type,this.number)
          .then(function successCallback(response){

            console.log(response);
            main.character=response.data;

          },function errorCallback(response){
            alert("some error occurred. Check the console.");
            console.log(response);
          });
        
      }

    }

}]);
