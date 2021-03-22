var xhr = new XMLHttpRequest();

var baseUrl = 'http://jservice.io/api/clues'
var query;


var val = '/value';
var cat = '/category';

var random = '/random';

var answer = '/answer';

// $("#submit").on("click",function() {

// 	query = "&count=" + $("#num").val()

// 	callAPI()

// })




xhr.open('GET', baseUrl, true);
xhr.send(null);

xhr.onload = function() {

	if (xhr.status == 200) {

		var clues = JSON.parse(xhr.responseText);
		// console.log(xhr.responseText);

		console.log(clues);
		console.log(clues.question_type)

		clues.forEach(function(data) {
			var selection = $("<select name='value' id='valSel'>");

			var option = "<option value='" + data.value + "'>" + data.value + "</option>";

			selection.html(option);

		})
		

	}
}

