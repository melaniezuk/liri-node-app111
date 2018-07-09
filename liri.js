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

// BEGINNING OF MY SECTION
//  variables to require fs, request, twitter, spotify
//  var Twitter = require('twitter');
  
//  var client = new Twitter({
//    consumer_key: '',
//    consumer_secret: '',
//    access_token_key: '',
//    access_token_secret: ''
//  });
  
//  var params = {screen_name: 'nodejs'};
//  client.get('statuses/user_timeline', params, function(error, tweets, response) {
//    if (!error) {
//      console.log(tweets);
//    }
//  });
 
//  Add your credentials accordingly. I would use environment variables to keep your private info safe. So something like:
//  var client = new Twitter({
//      consumer_key: process.env.TWITTER_CONSUMER_KEY,
//      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//    });
//  variable for switch call
 
 
//  grab twitter & spotify keys from key.js
 
 
//  set variable for twitter & spotify keys from keys.js
 
 
//  create switch call for node input commands
//  switch (command) {
//     case "my-tweets":
//         twitterLog();
//         break;
 
//     case "spotify-this-song":
//         var song = '';
//         song = process.argv[3];
//         if (process.argv[3] === undefined) {
//             var song = "The Sign Ace of Base"
//         }
//         spotifyLog(song);
//         break;
 
    
//  }
 
//  create function for twitter command
 
//  create function for spotify command
 
 
//  create function for movie command
 
//      use request package to grab data from omd api
    
//    if the request was successful
        
//              log body from the omdb
            
 
//             append data to log.txt file
            
//  }
 
 
//   run readFile and store the read information into the variable "data"
 
 
 


  
//   someone elses****
//  Load Required Node Modules
//  */
 
//  var Twitter = require('twitter');                       global var
//  var spotify = require('spotify');
//  var request = require('request');
//  var fs = require('fs');
 
 
//  Load the user Twitter keys
 
 
//  var keys = require('./keys.js');
//  var twitterKeys = keys.twitterKeys;
 
 
//  Read in command line arguments
 
 
//   Read in the command line arguments
//  var cmdArgs = process.argv;
 
//   The LIRI command will always be the second command line argument
//  var liriCommand = cmdArgs[2];
 
//   The parameter to the LIRI command may contain spaces
//  var liriArg = '';
//  for (var i = 3; i < cmdArgs.length; i++) {
//      liriArg += cmdArgs[i] + ' ';

// 		 TWITTER FUNCTION
 
//   retrieveTweets will retrieve my last 20 tweets and display them together with the date
//  function retrieveTweets() {
//      Append the command to the log file
//      fs.appendFile('./log.txt', 'User Command: node liri.js my-tweets\n\n', (err) => {
//          if (err) throw err;
//      });
 
//       Initialize the Twitter client
//      var client = new Twitter(twitterKeys);
 
//      Set the 'screen_name' to my Twitter handle
//      var params = {screen_name: '_angrbrd', count: 20};
 
//       Retrieve the last 20 tweets
//      client.get('statuses/user_timeline', params, function(error, tweets, response) {
//          if (error) {
//              var errorStr = 'ERROR: Retrieving user tweets -- ' + error;
 
//               Append the error string to the log file
//              fs.appendFile('./log.txt', errorStr, (err) => {
//                  if (err) throw err;
//                  console.log(errorStr);
//              });
//              return;
//          } else {
//               Pretty print user tweets
//              var outputStr = '------------------------\n' +
//                              'User Tweets:\n' + 
//                              '------------------------\n\n';
 
//              for (var i = 0; i < tweets.length; i++) {
//                  outputStr += 'Created on: ' + tweets[i].created_at + '\n' + 
//                               'Tweet content: ' + tweets[i].text + '\n' +
//                               '------------------------\n';
//              }
 
//               Append the output to the log file
//              fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
//                  if (err) throw err;
//                  console.log(outputStr);
//              });
//          }
//      });
//  }
 
//           SPOTIFY FUNCTION
 
//   spotifySong will retrieve information on a song from Spotify
//  function spotifySong(song) {
//       Append the command to the log file
//      fs.appendFile('./log.txt', 'User Command: node liri.js spotify-this-song ' + song + '\n\n', (err) => {
//          if (err) throw err;
//      });
 
//      If no song is provided, LIRI defaults to 'The Sign' by Ace Of Base
//      var search;
//      if (song === '') {
//          search = 'The Sign Ace Of Base';
//      } else {
//          search = song;
//      }
 
//      spotify.search({ type: 'track', query: search}, function(error, data) {
//          if (error) {
//              var errorStr1 = 'ERROR: Retrieving Spotify track -- ' + error;
 
//              // Append the error string to the log file
//              fs.appendFile('./log.txt', errorStr1, (err) => {
//                  if (err) throw err;
//                  console.log(errorStr1);
//              });
//              return;
//          } else {
//              var songInfo = data.tracks.items[0];
//              if (!songInfo) {
//                  var errorStr2 = 'ERROR: No song info retrieved, please check the spelling of the song name!';
 
//                  Append the error string to the log file
//                  fs.appendFile('./log.txt', errorStr2, (err) => {
//                      if (err) throw err;
//                      console.log(errorStr2);
//                  });
//                  return;
//              } else {
//                  Pretty print the song information
//                  var outputStr = '------------------------\n' + 
//                                  'Song Information:\n' + 
//                                  '------------------------\n\n' + 
//                                  'Song Name: ' + songInfo.name + '\n'+ 
//                                  'Artist: ' + songInfo.artists[0].name + '\n' + 
//                                  'Album: ' + songInfo.album.name + '\n' + 
//                                  'Preview Here: ' + songInfo.preview_url + '\n';
 
//                  Append the output to the log file
//                  fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
//                      if (err) throw err;
//                      console.log(outputStr);
//                  });
//              }
//          }
//      });
//  }
 
 
//                     OMDB FUNCTION
 
//  retrieveOMDBInfo will retrieve information on a movie from the OMDB database
//  function retrieveOBDBInfo(movie) {
//      Append the command to the log file
//      fs.appendFile('./log.txt', 'User Command: node liri.js movie-this ' + movie + '\n\n', (err) => {
//          if (err) throw err;
//      });
 
//       If no movie is provided, LIRI defaults to 'Mr. Nobody'
//      var search;
//      if (movie === '') {
//          search = 'Mr. Nobody';
//      } else {
//          search = movie;
//      }
 
//       Replace spaces with '+' for the query string
//      search = search.split(' ').join('+');
 
//       Construct the query string
//      var queryStr = 'http://www.omdbapi.com/?t=' + search + '&plot=full&tomatoes=true';
 
//       Send the request to OMDB
//      request(queryStr, function (error, response, body) {
//          if ( error || (response.statusCode !== 200) ) {
//              var errorStr1 = 'ERROR: Retrieving OMDB entry -- ' + error;
 
//               Append the error string to the log file
//              fs.appendFile('./log.txt', errorStr1, (err) => {
//                  if (err) throw err;
//                  console.log(errorStr1);
//              });
//              return;
//          } else {
//              var data = JSON.parse(body);
//              if (!data.Title && !data.Released && !data.imdbRating) {
//                  var errorStr2 = 'ERROR: No movie info retrieved, please check the spelling of the movie name!';
 
//                   Append the error string to the log file
//                  fs.appendFile('./log.txt', errorStr2, (err) => {
//                      if (err) throw err;
//                      console.log(errorStr2);
//                  });
//                  return;
//              } else {
//                   Pretty print the movie information
//                  var outputStr = '------------------------\n' + 
//                                  'Movie Information:\n' + 
//                                  '------------------------\n\n' +
//                                  'Movie Title: ' + data.Title + '\n' + 
//                                  'Year Released: ' + data.Released + '\n' +
//                                  'IMBD Rating: ' + data.imdbRating + '\n' +
//                                  'Country Produced: ' + data.Country + '\n' +
//                                  'Language: ' + data.Language + '\n' +
//                                  'Plot: ' + data.Plot + '\n' +
//                                  'Actors: ' + data.Actors + '\n' + 
//                                  'Rotten Tomatoes Rating: ' + data.tomatoRating + '\n' +
//                                  'Rotten Tomatoes URL: ' + data.tomatoURL + '\n';
 
//                   Append the output to the log file
//                  fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
//                      if (err) throw err;
//                      console.log(outputStr);
//                  });
//              }
//          }
//      });
//  }
 
//                           THIS FUNCTION WILL READ IN A FILE AND DETERMIN THE COMMAND THAT NEEDS TO BE EXECUTED
 
//   doAsYerTold will read in a file to determine the desired command and then execute
//  function doAsYerTold() {
//       Append the command to the log file
//      fs.appendFile('./log.txt', 'User Command: node liri.js do-what-it-says\n\n', (err) => {
//          if (err) throw err;
//      });
 
//       Read in the file containing the command
//      fs.readFile('./random.txt', 'utf8', function (error, data) {
//          if (error) {
//              console.log('ERROR: Reading random.txt -- ' + error);
//              return;
//          } else {
//              Split out the command name and the parameter name
//              var cmdString = data.split(',');
//              var command = cmdString[0].trim();
//              var param = cmdString[1].trim();
 
//              switch(command) {
//                  case 'my-tweets':
//                      retrieveTweets(); 
//                      break;
 
//                  case 'spotify-this-song':
//                      spotifySong(param);
//                      break;
 
//                  case 'movie-this':
//                      retrieveOBDBInfo(param);
//                      break;
//              }
//          }
//      });
//  }
 
//   Determine which LIRI command is being requested by the user
//  if (liriCommand === 'my-tweets') {
//      retrieveTweets(); 
 
//  } else if (liriCommand === `spotify-this-song`) {
//      spotifySong(liriArg);
 
//  } else if (liriCommand === `movie-this`) {
//      retrieveOBDBInfo(liriArg);
 
//  } else if (liriCommand ===  `do-what-it-says`) {
//      doAsYerTold();
 
//  } else {
//       Append the command to the log file
//      fs.appendFile('./log.txt', 'User Command: ' + cmdArgs + '\n\n', (err) => {
//          if (err) throw err;
 
//           If the user types in a command that LIRI does not recognize, output the Usage menu 
//           which lists the available commands.
//          outputStr = 'Usage:\n' + 
//                     '    node liri.js my-tweets\n' + 
//                     '    node liri.js spotify-this-song "<song_name>"\n' + 
//                     '    node liri.js movie-this "<movie_name>"\n' + 
//                     '    node liri.js do-what-it-says\n';
 
//          Append the output to the log file
//          fs.appendFile('./log.txt', 'LIRI Response:\n\n' + outputStr + '\n', (err) => {
//              if (err) throw err;
//              console.log(outputStr);
//          });
//      });
//  }
 
 
 
 
 
 
 
 
//  require("dotenv").config();
//  Load the required nodes
//  var Twitter = require('twitter'); npm install twitter
//  var spotify = require('node-spotify-api'); npm install --save node-spotify-api
//  var omdb = require('omdb'); npm install omdb
//  var keys = require('./keys.js'); links to the keys.js file
//  FROM WEATHERDEST.JS 
//  Take in the command line arguments
//  var nodeArgs = process.argv;
//  Create an empty string for holding the address
//  var address = "";
//  Capture all the words in the address (again ignoring the first two Node arguments)
//  for (var i = 2; i < nodeArgs.length; i++) {
//    Build a string with the address.
//    address = address + " " + nodeArgs[i];
//  }
//   access the spotify and twitter keys
//    var spotifyKeys = new Spotify(keys.spotify);
//    var twitterKeys = new Twitter(keys.twitter);
//    Make twitter work
//    var Twitter = require('twitter');
  
//   var client = new Twitter({
//    consumer_key: '',
//    consumer_secret: '',
//    access_token_key: '',
//     access_token_secret: ''
//   });
  
//  var params = {screen_name: 'nodejs'};
//  twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
//    if (!error) {
//      console.log(tweets);
//    }
//  });
//  Make spotify work
//  var Spotify = require('node-spotify-api');
  
//  var spotify = new Spotify({
//     id: <your spotify client id>,
//     secret: <your spotify client secret>
//   });
  
//  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//    if (err) {
//      return console.log('Error occurred: ' + err);
//    }
  
//  console.log(data); 
//  });
//  // Make OMDB work
//  // var omdb = require('omdb');
  
//  omdb.search('saw', function(err, movies) {
//      if(err) {
//          return console.error(err);
//      }
  
//      if(movies.length < 1) {
//          return console.log('No movies were found!');
//      }
  
//      movies.forEach(function(movie) {
//          console.log('%s (%d)', movie.title, movie.year);
//      });
  
//  });
  
//  omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
//      if(err) {
//          return console.error(err);
//      }
  
//      if(!movie) {
//          return console.log('Movie not found!');
//      }
  
//      console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
//      console.log(movie.plot);
//  });
//   Make it so liri.js can take in one of the following commands:
//   `my-tweets`
//   `spotify-this-song`
//   `movie-this`
//   `do-what-it-says`
//   Each command:
//   node liri.js my-tweets
//   This will show your last 20 tweets and when they were created at in your terminal/bash window.
//   node liri.js spotify-this-song '<song name here>'
//   This will show the following information about the song in your terminal/bash window
//   Artist(s)
//   The song's name
//   A preview link of the song from Spotify
//  The album that the song is from
//   If no song is provided then your program will default to "The Sign" by Ace of Base.
//   node liri.js movie-this '<movie name here>'
//      * Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, Actors in the movie.
//  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//   If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
//   node liri.js do-what-it-says
//   Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//   It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
//   In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
//  Make sure you append each command you run to the log.txt file. 
//   Do not overwrite your file each time you run a command. 	