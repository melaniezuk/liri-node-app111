console.log("hello world");

//require("dotenv").config();																			//read and set any environment variables with the dotenv package

var Twit = require('twit');                                       //initiate twitter npm
var SpotifyWebApi = require('spotify-web-api-node');              //initiate spotify npm

var cmmdArgs = process.argv;                                      // Read in the command line arguments 
                                                         
//var liriCommand = cmmdArgs[2];                                  // The LIRI command will always be the second command line argument
                                                                  // an array containing command line arguments. first element
                                                                  // will be 'node', second will be name of js file

//Twitter Function

var config = require('./config');		
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


	//previous attempts
/*require("dotenv").config();                             // Read and set any environment variables with the dotenv package   
           
 var Twitter = require('twitter');                       //load required node modules, set of functions, like js libraries                     
 var spotify = require('spotify');
 var request = require('request');
 var fs = require('fs');
 
 var spotify = new Spotify(keys.spotify);                //access the spotify and twitter keys
 var client = new Twitter(keys.twitter);
 
var cmmdArgs = process.argv;                             // Read in the command line arguments 
                                                         
var liriCommand = cmmdArgs[2];                           // The LIRI command will always be the second command line argument
                                                         // an array containing command line arguments. first element
                                                         // will be 'node', second will be name of js file
 
var liriArg = '';                                        // The parameter to the LIRI command may contain spaces
for (var i = 3; i < cmmdArgs.length; i++) {              // for loop, i = 3, as long as i is less then the length
                                                         // of cmmdArgs, then add one
	liriArg += cmdArgs[i] + ' ';
}
                

//TWITTER FUNCTION


#initialize(options = {}) {|_self| ... } ⇒ Twitter::Client              //initialize the twitter client 

var client = new Twitter({                                               //user based authentication
   consumer_key: '',
   consumer_secret: '',
   access_token_key: '',
   access_token_secret: ''
 });
    
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
  
  
  var client = new Twitter({                                            //Add your credentials accordingly. environment variables to keep your private info safe. 
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
 

function retrieveTweets() {                                          // retrieveTweets will retrieve my last 20 tweets and display them together with the date
	
	fs.appendFile('./log.txt', 'User Command: node liri.js my-tweets\n\n', (err) => {  // Append the command to the log file
		if (err) throw err;
	});

	var client = new Twitter(twitterKeys);                           // Initialize the Twitter client
	
    
    //Set the 'screen_name' to my Twitter handle
	
    // Retrieve the last 20 tweets
		
			
			/*fs.appendFile('./log.txt', errorStr, (err) => {             // Append the error string to the log file
				if (err) throw err;
				console.log(errorStr);
			});
			return;
		} else {
			// Pretty print user tweets
			var outputStr = '------------------------\n' +
							'User Tweets:\n' + 
							'------------------------\n\n';

			for (var i = 0; i < tweets.length; i++) {
				outputStr += 'Created on: ' + tweets[i].created_at + '\n' + 
							 'Tweet content: ' + tweets[i].text + '\n' +
							 '------------------------\n';
			}

			// Append the output to the log file
			fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
				if (err) throw err;
				console.log(outputStr);
			});
		}
	});
}
//SPOTIFY FUNCTION

                                                                        
function spotifySong(song) {                                            // spotifySong will retrieve information on a song from Spotify
    fs.appendFile(textFile /*(what is this), "node liri.js", function(err) {               // We then append the contents "Hello Kitty" into the file
                                                                                             // If the file didn't exist then it gets created on the fly.
  var default = "Ace of Base";
  var search;
  var songSearched = user input;
  if (song !== "") {                                                           // If an error was experienced, say it.
    default;                                                                   //if no song is provided, liri will default to ace of base. how do i write ace of base?
  }
    else {                                                                     // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    search ("songSearched");
  }

});

//run npm install in node to find dependencies, then it will store npm package in node modules folder. 


/*var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

  //request

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
                                  
/*can't use, other's code. just trying to learn from it.

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
             	
	spotify.search({ type: 'track', query: search}, function(error, data) {
	    if (error) {
			var errorStr1 = 'ERROR: Retrieving Spotify track -- ' + error;

			// Append the error string to the log file
			fs.appendFile('./log.txt', errorStr1, (err) => {
				if (err) throw err;
				console.log(errorStr1);
			});
			return;
	    } else {
			var songInfo = data.tracks.items[0];
			if (!songInfo) {
				var errorStr2 = 'ERROR: No song info retrieved, please check the spelling of the song name!';

				// Append the error string to the log file
				fs.appendFile('./log.txt', errorStr2, (err) => {
					if (err) throw err;
					console.log(errorStr2);
				});
				return;
			} else {
				// Pretty print the song information
				var outputStr = '------------------------\n' + 
								'Song Information:\n' + 
								'------------------------\n\n' + 
								'Song Name: ' + songInfo.name + '\n'+ 
								'Artist: ' + songInfo.artists[0].name + '\n' + 
								'Album: ' + songInfo.album.name + '\n' + 
								'Preview Here: ' + songInfo.preview_url + '\n';

				// Append the output to the log file
				fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
					if (err) throw err;
					console.log(outputStr);
				});
			}
	    }
	});
} */



//OMDB FUNCTION


 /*var movieName = process.argv[2];                                 // Grab the movieName which will always be the third node argument.
 var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";    // Then run a request to the OMDB API with the movie specified
 
 console.log(queryUrl);                                           // This line is just to help us debug against the actual URL.
  request(queryUrl, function(error, response, body) {
 
   if (!error && response.statusCode === 200) {                   // If the request is successful
     
     console.log("Release Year: " + JSON.parse(body).Year);       // Parse the body of the site and recover just the imdbRating
                                                                  // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
   }
 });
 
 
 
 
 
                       
  


                         
                                        
                                    
                                        
                                       
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
  