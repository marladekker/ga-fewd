// 
// 2. Add .on("click", function() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()


var count = 0;
$("#a10").on("click", function(){
	// console.log("what is it");
	$("#out").text(count + 10);
})

var count = 0
$("#a20").on("click", function(){
	$("#out").text(count + 20);
})

var count = 0
$("#a30").on("click", function (){
	$("#out").text(count + 30);
})

var count = 0
$("#n10").on("click", function(){
	$("#out").text(count - 10);
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


