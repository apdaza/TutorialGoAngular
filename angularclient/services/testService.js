angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory
		var path = "http://localhost:8080/api/v1/";
		return {
			//Login
			users : function(){ //Retornara la lista de posts
				global = $http.get(path+'users');
				return global;
			},
			user : function(id){ //retornara el user por el id
				global = $http.get(path+'users/'+id);
				return global;
			},
			del : function(id){
				global = $http.delete(path+'users/'+id);
				return global;
			},
			add : function(first,last){
				var data = {
	                firstname: first,
	                lastname: last
	            };

				global = $http.post(path+'users',data);
				return global;
			},
			edit : function(id,first,last){
				var data = {
	                firstname: first,
	                lastname: last
	            };

				global = $http.put(path+'users/'+id,data);
				return global;
			}
		}
	});
