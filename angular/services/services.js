// using factory method

// Factory method uses the returned value of the function,
// it returns the values
//of the function returned after the execution
// 


myApp.factory('BookService',function BookFactory($http)
{
 
 // this method first 
 var blogAPIS  =  {};
 var baseUrl='https://www.anapioficeandfire.com/api';

 blogAPIS.getAllBooks=function()
 {

 	return $http({
 		method:'GET',
 		url: baseUrl+'/books'
 	})

 } // end getAllBooks

 blogAPIS.viewAllBooks=function(type,number)
 {
 	
 	return $http({

 		method:'GET',
 		url:baseUrl+'/'+type+'/'+number
 	});

 } // end viewAllBooks


  blogAPIS.getAllHouses=function()
 {
 	return $http({
 		method:'GET',
 		url:baseUrl+'/houses'
 	})

 } // end getAllHouses

  blogAPIS.viewAllHouses=function(type,number)
 {
 	
 	return $http({
 		method:'GET',
 		url:baseUrl+'/'+type+'/'+number
 	});

 }//end viewAllHouses


 blogAPIS.getAllCharacters=function()
 {
 	return $http({
 		method:'GET',
 		url:baseUrl+'/characters'
 	})

 } // end getAllCharacters

 blogAPIS.viewAllCharacters=function(type,number)
 {
 	return $http({
 		method:'GET',
 		url:baseUrl+'/'+type+'/'+number
 	});
 }// end viewAllCharacters

 return blogAPIS;

}); // end blog service

