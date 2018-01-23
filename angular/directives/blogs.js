// filter for index-view page

myApp.filter('getType',function()
  {
    return function(item)
    {
      if(item.substring(38,43)=='books')
       { 
        return "book"
      	}
      else if(item.substring(38,44)=='houses')
       { 
        return "house"
      	}
      else 
      	{
        return "character"
    	}
    }

  });

// directive for index-view so that book,house and character card look different

myApp.directive('customCard',function($filter)
{
    return{
    restrict    :  'E',
    templateUrl : './views/custom-card.html',
    scope       :{
      post: '='
    },
    controller  : function($scope){
    
		if(($filter('getType')($scope.post.url))=='book')
		{ 
		    $scope.postStyle = 
		    {
		    "background-color" : "#E0FFFF",
			} 		  
		}

		else if(($filter('getType')($scope.post.url))=='house')
		{
		    $scope.postStyle =
		    {		    
		    "background-color" : "khaki"
		    }
		}

		else
		{
		     $scope.postStyle = 
		    {		     
		     "background-color" : "antiquewhite"
		   	}
		}
       
     },
	}
});



// filter for single-view page to get the url

myApp.filter('getUrl',function()
  {
    return function(item)
    {
      if(item.substring(38,43)=='books')
       {
        return item.substring(38)
      }
      else if(item.substring(38,44)=='houses')
       {
        return item.substring(38)
      }
      else{
        return item.substring(38)
    	}
    }
  });
