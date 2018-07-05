console.log("hello world");

var Twit = require('twit');                                        //initiate twitter npm

var T = new Twit({                                                 //make a new "twit" object and authenticate. tied to twitter acct
  consumer_key:         'hBwb960yVaPLz7JZc0reKlpG5',					
  consumer_secret:      'ddBDuQOeJ7eE48JS2H7rvMMkXhUXVwOuTiaYeDswQoIKIb3GcS',
  access_token:         '1014714406935154689-ai2PWlbfANUaftIzCB6ly8AQsLLIC5',
  access_token_secret:  'K2SRE8OZZwnVSkFkCGSrn3fneeSeUffrJ5NLRSFSrFfVM',
  });

	var params = {																										//set some parameters
		q: 'israelisalad',
		count: 20
	};
	
	T.get('search/tweets', params, gotData);													//make a get request
	
	function gotData(err, data, response) {														//run function
		var tweets = data.statuses; 																		//put the returned info (statuses) of the json info in var tweets
		for (var i = 0; i < tweets.length; i++) {												//run for loop to show the 20 tweets
			console.log(tweets[i].text);																	//log 20 tweets
		}
	}