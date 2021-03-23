var xhr = new XMLHttpRequest();

var baseUrl = 'http://jservice.io/api/clues'



// var random = '/random';

// var answer = '/answer';


xhr.open('GET', baseUrl, true);
xhr.send(null);

xhr.onload = function() {

	if (xhr.status == 200) {

		var clues = JSON.parse(xhr.responseText);
		// console.log(xhr.responseText);

		console.log(clues);

		clues.forEach(function(data) {
			var selection = $("#catSel");

			var title = data.category.title;


			var option = "<option value='" + title + "'>" + title + "</option>";

			check(title, option, selection);

		 })

		// submit button here
	// 	$("#submit").on("click",function() {

	// 		var value = $("#valSel option:selected").text();

	// })

	}
}

// condition to check for repeats
function check (data, option, selection) {
	data.forEach(function(tag){
		if (!data.includes(tag)) {
			selection.append(option);
		}
	})
}