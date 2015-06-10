angular.module('myApp', [])
	.controller('MyCtrl', function($scope) {
		$scope.name = 'Name';
		$scope.jobTitle = "Job Title";
		$scope.tediousTask = "Tedious Task";
		$scope.dirtyTask = "Dirty Task";
		$scope.celebrity = "Celebrity";
		$scope.uselessSkill = "Useless Skill";
		$scope.obnoxiousCelebrity = "Obnoxious Celebrity";
		$scope.hugeNumber = "Huge Number";
		$scope.adjective = "adjective";
		$scope.gender = "Male";

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

	});