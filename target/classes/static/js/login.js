function register() {
	document.getElementById("loginform").style.display = "none";
	document.getElementById("registerform").style.display = "block";
}

function login() {
	document.getElementById("loginform").style.display = "block";
	document.getElementById("registerform").style.display = "none";
}


var app = angular.module("login", []);

app.controller("mainController", function($scope, $http, $window) {

	$scope.alogin = function () {
		var req = {
			method: 'POST',
			url: "/login",
			headers: {
				'Content-Type': 'application/json',
			},
			data: {'email':$scope.log_email, 'password':$scope.log_password}
		}

		$http(req).success(function (response) {

			console.log(response);
			if(response) {
				$window.location.href = '/news.html';
			}
			else {
				alert("Incorrect email or password! Try again");

			}
        })

    };

	$scope.aregister = function () {

		var req = {
			method: 'POST',
			url: 'http://localhost:8080/register',
			headers: {
                'Content-Type': 'application/json',
			},
			data: {
				'email':$scope.email,
				'userName':$scope.userName,
				'password': $scope.password,
			}
		}
		$http(req).success(function (response) {
			console.log(response);
			if(response) {
				alert("User created Succesfully! please login")
				$window.location.href = "#"
			}
			else {
				alert("database not working");
			}
        })

    };

})