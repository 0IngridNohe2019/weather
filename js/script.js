var Weat = angular.module("Weat",[])
Weat.controller("Weat",function($scope,$rootScope,$http){
	$scope.Lista = [];

	$scope.buscar=function(pais){

		$http({
			method: "GET",
			url: "https://openweathermap.org/data/2.5/forecast?q="+pais+",GT&appid=b6907d289e10d714a6e88b30761fae22"
		}).then(function datos(clima) {
			$scope.Lista.push(clima)
			console.log(clima)
		})
	}


});