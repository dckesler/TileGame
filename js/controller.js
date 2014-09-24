var app = angular.module("tileApp");

app.controller("tileController", function($scope, tileService){
	$scope.showTitle = true;
	$scope.showBoard = false;
	$scope.gameDifficulty = 4;
	$scope.playingList = [];
	$scope.timer = false;
	$scope.timeLeft = 60;

	
	
	$scope.plays = function(x, bool){
		if(bool){
			$scope.showTitle = false;
			$scope.showBoard = true;
			tileService.increaseScore();
			$scope.gameDifficulty = tileService.increaseDifficulty();
			$scope.playingList = tileService.play(x);
		}
	};
	$scope.resetScore = function(x, bool){
		$scope.gameDifficulty = 4;
		$scope.playingList = [];
		tileService.resetScore();
		$scope.getScore();
		$scope.plays(x, bool);
	};
	$scope.getScore = function(){
		return tileService.returnScore();
	};


});