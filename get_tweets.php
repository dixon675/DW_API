<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "2293021387-tksxsIIxJq2mCXMLPy7NZPvuHCpxmsRdvUDqDkM",
	    'oauth_access_token_secret' => "vuYoFYP9PaSsOPjaTKo9Jlp0BNv1UEMmoSDOeWAmsc41m",
	    'consumer_key' => "NlIsTgmTXVYd960GV8KahTzL2",
	    'consumer_secret' => "YUro1HbDps0XfRnQuxf5zwYcSkT1iCZtGchmBitgJ8JZOdiqVf"
	);

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
	$getfield = '?screen_name=R6esports&count=20';
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

