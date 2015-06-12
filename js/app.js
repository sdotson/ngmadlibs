angular.module('myApp', [])
	.controller('MyCtrl', function($scope) {
		$scope.gender = "Male";
		$scope.activeView = 'form';

		$scope.reset = function() {
			$scope.data = '';
			$scope.activeView = 'form';
		};


		$scope.changeGender = function() {
			if ($scope.gender == "Male") {
				$scope.genderSubject = "he";
				$scope.genderPossessive = "his";
				$scope.genderObject = "him";
			} else {
				$scope.genderSubject = "she";
				$scope.genderPossessive = "her";
				$scope.genderObject = "her";
			};
		};

		$scope.submit = function() {
			console.log($scope.myForm.$valid);
			if ($scope.myForm.$valid) {
				$scope.activeView = "output";
			};
		};

	});