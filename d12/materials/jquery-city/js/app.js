// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


$("#first").on("click", function(){
	$("figure img").attr("src", "img/1.jpg");	
})

$("#second").on("click", function(){
	$("figure img").attr("src", "img/2.jpg");
})

$("#third").on("click", function(){
	$("figure img").attr("src", "img/3.jpg");
})

$("#fourth").on("click", function (){
	$("figure img").attr("src", "img/4.jpg");
})











// $("button#click-me").on("click", function(){

// 	var CurrentAge = $("#age").val();
// 	// console.log(CurrentAge);

//     var EndAge = $("#max-age").val();
//     // console.log(EndAge);
	
// 	var NumCups = $("#num-per-day").val();
// 	// console.log(NumCups);

//     var remainingYears = (EndAge - CurrentAge);
//     // console.log(remainingYears);

//     var remainingDays = remainingYears * 365;
//     // console.log(remainingDays);

//     var totalCups = remainingDays * NumCups;
//     // console.log (totalCups);

//   	$("span#solution").text(totalCups);







  