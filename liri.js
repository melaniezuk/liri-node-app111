console.log("hello world");

//require("dotenv").config();																			//read and set any environment variables with the dotenv package

var Twit = require('twit');                                       //initiate twitter npm
var SpotifyWebApi = require('spotify-web-api-node');              //initiate spotify npm

var cmmdArgs = process.argv;                                      // Read in the command line arguments 
                                                         
//var liriCommand = cmmdArgs[2];                                  // The LIRI command will always be the second command line argument
                                                                  // an array containing command line arguments. first element
                                                                  // will be 'node', second will be name of js file

//Twitter Function

var config = require('../config');		
	console.log(config);
	var T = new Twit(config);

//var T = new Twit({  
	//keys went here                                                //make a new "twit" object and authenticate. tied to twitter npm
   // });

	var params = {																									//set some parameters
		q: 'israelisalad',
		count: 20
	};
	
	T.get('search/tweets', params, gotData);												//make a get request
	
	function gotData(err, data, response) {													//run function
		var tweets = data.statuses; 																	//put the returned info (statuses) of the json info in var tweets
		for (var i = 0; i < tweets.length; i++) {											//run for loop to show the 20 tweets
			console.log(tweets[i].text);																//log 20 tweets
		}
	}

	//Spotify Function

	var spotifyApi = new SpotifyWebApi({														//make a new spotify object and authenticate. tied to spotify npm
		//fix key situation
		
	});

	var params = {																									//set parameters
		artist:'';
		name: '';
		preview link: '';
		album: '';
	};

