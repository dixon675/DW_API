var xhr = new XMLHttpRequest();

var baseUrl = 'http://jservice.io/api/clues'


xhr.open('GET', baseUrl, true);
xhr.send(null);

xhr.onload = function() {

	if (xhr.status == 200) {

		var clues = JSON.parse(xhr.responseText);

		var titleArray = [];
		// console.log(xhr.responseText);

		console.log(clues);

		clues.forEach(function(data) {
			var selection = $("#catSel");

			var title = data.category.title;


			var option = "<option value='" + title + "'>" + title + "</option>";


			if(!titleArray.includes(title)) {
				titleArray.push(title);
				selection.append(option);
			}

		})

		// submit button here
		$("#submit").on("click",function() {

			var value = $("#valSel option:selected").text();
			var select =$("#catSel option:selected").text();

			var viewport = $(".viewport")
			var container = $("<div>")


			clues.forEach(function(data){
				if(value == data.value && select == data.category.title) {
					
					var questionBox = "";
					questionBox += "<h3 class='question'>" + data.question +  "</h3>"
					questionBox += "<p class='answer'>" + data.answer +  "</p>"

					container.html(questionBox);
					viewport.prepend(container);
				}
			})

		})

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