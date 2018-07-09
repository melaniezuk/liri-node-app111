console.log("hello world");

require("dotenv").config();																		  	//this messes up the tweets being pulled, but i know
																																	//i'm supposed to add it. read and set any environment variables with the 
																																	//dotenv package

var Twit = require('twit');                                       //initiate twitter npm
//var SpotifyWebApi = require('spotify-web-api-node');            //initiate spotify npm

var cmmdArgs = process.argv;                                      // Read in the command line arguments 
                                                         
//var liriCommand = cmmdArgs[2];                                  // The LIRI command will always be the second command line argument
                                                                  // an array containing command line arguments. first element
                                                                  // will be 'node', second will be name of js file

//Twitter Function

var keys = require('./keys');		
	console.log(keys.twitter);
	var T = new Twit(keys.twitter);

//var T = new Twit({  
	//keys went here                                                //make a new "twit" object and authenticate. tied to twitter npm
   // });

	var params = {																									//set some parameters
		q: 'israelisalad',
		count: 20
	};
	
	T.get('search/tweets', params, gotData);												//make a get request-search for tweets and then what exactly to look for
	
	function gotData(err, data, response) {													//run the callback function (a function is triggered when the data is returned from api) 
		var tweets = data.statuses; 																	//put the returned info (statuses/text) of the json info in var tweets
		for (var i = 0; i < tweets.length; i++) {											//run for loop to show the 20 tweets
			console.log(tweets[i].text);																//log 20 tweets
		}
	}

	