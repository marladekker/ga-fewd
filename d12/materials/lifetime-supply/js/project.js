
$("button#click-me").on("click", function(){

	var CurrentAge = $("#age").val();
	// console.log(CurrentAge);

    var EndAge = $("#max-age").val();
    // console.log(EndAge);
	
	var NumCups = $("#num-per-day").val();
	// console.log(NumCups);

    var remainingYears = (EndAge - CurrentAge);
    // console.log(remainingYears);

    var remainingDays = remainingYears * 365;
    // console.log(remainingDays);

    var totalCups = remainingDays * NumCups;
    // console.log (totalCups);

  	$("span#solution").text(totalCups);
    

});







// $("button").on("click", function() {
//   var fahrTempAsString = $("#temperature").val();
//   var fahrTemp = parseFloat(fahrTempAsString);
//   var celsiusTemp = (fahrTemp * 1.8) + 32;
//   $("#converted").text(celsiusTemp);
// });