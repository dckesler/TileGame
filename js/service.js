var app = angular.module("tileApp");

app.service("tileService", function(){

	var tiles = [];

	var timer = 60;
	var score = -1;
	this.resetScore = function(){
		score = -1;
		return score;
	};
	this.returnScore = function(){
		return score;
	};
	this.increaseScore = function(){
		score+=1;
		return score;
	};



	var gameDifficulty = 0;
	this.increaseDifficulty = function(){
		if(score<3){
			gameDifficulty=9;
		}
		else if(score<6){
			gameDifficulty=16;
		}
		else if(score<10){
			gameDifficulty=25;
		}
		else if(score<15){
			gameDifficulty=36;
		}
		else if(score<19){
			gameDifficulty=49;
		}
		else if(score<23){
			gameDifficulty=64;
		}
		else if(score<27){
			gameDifficulty=81;
		}
		else if(score<31){
			gameDifficulty=100;
		}
		else if(score<35){
			gameDifficulty=121;
		}
		else if(score<40){
			gameDifficulty=144;
		}


		return gameDifficulty;
	};

	var Tiler = function(x, y, z, sq){
		this.hue = x;
		this.lightness = 50+y;
		this.click = z;
		this.square = 96/sq;
		this.mar = 4/(sq*2);
	};

	var play4 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*4);
		for(var i = 0; i<4; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 10, true, 2);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 2);
				tiles.push(tile);
			}
		}
	};
	var play9 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*9);
		for(var i = 0; i<9; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 8, true, 3);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 3);
				tiles.push(tile);
			}
		}
	};
	var play16 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*16);
		for(var i = 0; i<16; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 6, true, 4);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 4);
				tiles.push(tile);
			}
		}
	};
	var play25 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*25);
		for(var i = 0; i<25; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 5, true, 5);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 5);
				tiles.push(tile);
			}
		};
	};
	var play36 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*36);
		for(var i = 0; i<36; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 4, true, 6);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 6);
				tiles.push(tile);
			}
		}
	};
	var play49 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*49);
		for(var i = 0; i<49; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 3, true, 7);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 7);
				tiles.push(tile);
			}
		}
	};
	var play64 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*64);
		for(var i = 0; i<64; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 3, true, 8);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 8);
				tiles.push(tile);
			}
		}
	};
	var play81 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*81);
		for(var i = 0; i<81; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 3, true, 9);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 9);
				tiles.push(tile);
			}
		}
	};
	var play100 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*100);
		for(var i = 0; i<100; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 3, true, 10);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 10);
				tiles.push(tile);
			}
		}
	};
	var play121 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*121);
		for(var i = 0; i<121; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 3, true, 11);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 11);
				tiles.push(tile);
			}
		}
	};
	var play144 = function(){
		tiles = [];
		var hueSet = Math.floor(Math.random()*360);
		var lightTile = Math.floor(Math.random()*144);
		for(var i = 0; i<144; i++){
			if(lightTile===i){
				var theTile = new Tiler(hueSet, 2, true, 12);
				tiles.push(theTile);
			}
			else{
				var tile = new Tiler(hueSet, 0, false, 12);
				tiles.push(tile);
			}
		}
	};

	this.play = function(x){
		if(x===4){
			play4();
			return tiles;
		}
		else if(x===9){
			play9();
			return tiles;
		}
		else if(x===16){
			play16();
			return tiles;
		}
		else if(x===25){
			play25();
			return tiles;
		}
		else if(x===36){
			play36();
			return tiles;
		}
		else if(x===49){
			play49();
			return tiles;
		}
		else if(x===64){
			play64();
			return tiles;
		}
		else if(x===81){
			play81();
			return tiles;
		}
		else if(x===100){
			play100();
			return tiles;
		}
		else if(x===121){
			play121();
			return tiles;
		}
		else if(x===144){
			play144();
			return tiles;
		}
	};

});