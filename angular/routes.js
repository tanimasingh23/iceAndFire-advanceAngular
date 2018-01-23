//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myBook'
        })
        
        .when('/single-view/:type/:number',{

        	templateUrl     : 'views/single-view.html',
        	controller 		: 'singleController',
        	controllerAs 	: 'single'
        })
        
        .when('/error',{

            template   : '<h1>Some error occured while connecting to backend</h1>'

        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);