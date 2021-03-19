var xhr = new XMLHttpRequest();

xhr.open('GET', 'get_tweets.php', true);

xhr.send(null);

xhr.onload = function() {

	if (xhr.status == 200) {
		
		// console.log(xhr.responseText);

		var tweets = JSON.parse(xhr.responseText);

		console.log(tweets);

		

	}
}