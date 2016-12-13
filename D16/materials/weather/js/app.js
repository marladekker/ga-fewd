$("button").on("click", function() {
	// console.log("working?");
	var city = $("input").val();
	// console.log(city);
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=city&units=imperial&apikey=e723860eb8959c38c9467f3782a3ca57", function(data) {
	  console.log(data);
	  $(".temperature").text(data["main"]["temp"])
	  $(".icon").
	});
});


















// e723860eb8959c38c9467f3782a3ca57