angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	$scope.users={};
	$scope.user={};
	$scope.getAllUsers = function(){
		testRequest.users().success(function (data){
			$scope.users=data; // Asignaremos los datos de todos
			$scope.users.exist=1;
			$scope.user.exist=0;
		});
	}
	$scope.getUser = function(){
		testRequest.user($scope.user_id).success(function (data){
			$scope.user=data; // Asignaremos los datos
			$scope.user.exist=1;
			$scope.users.exist=1;
		});
	}
	$scope.selectId = function(id){
		$scope.user_id = id;
		$scope.getUser();
	}
	$scope.deleteUser = function(){
		testRequest.del($scope.user_id).success(function (data){
			alert("user deleted");
			$scope.user.exist=0;
			$scope.getAllUsers();

		});
	}
	$scope.editUser = function() {
		// I was lazy with the user input.
		var firstname = $scope.user.firstname; //prompt("Enter the user firstname.");
		if(firstname == null){
			return;
		}
		var lastname = $scope.user.lastname; //prompt("Enter the user lastname.");
		if(lastname == null){
			return;
		}
		testRequest.edit($scope.user_id,firstname,lastname).success(function (){
			$scope.getAllUsers();
		});
	};
	$scope.add = function() {
		// I was lazy with the user input.
		var firstname = $scope.user.firstname; //prompt("Enter the user firstname.");
		if(firstname == null){
			return;
		}
		var lastname = $scope.user.lastname; //prompt("Enter the user lastname.");
		if(lastname == null){
			return;
		}
		testRequest.add(firstname,lastname).success(function (){
			$scope.getAllUsers();
		});
	};
}
