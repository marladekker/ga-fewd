var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}

$("#ct").on("click", function() {
	$("h1").text(ct["name"]);
	$(".capital").text(ct["capital"]);
	$(".governor").text(ct["governor"]);
	$("li#first-senator").text(ct["usSenators"][0]);
	$("li#second-senator").text(ct["usSenators"][1]);
});

$("#ny").on("click", function () {
	$("h1").text(ny["name"]);
	$(".capital").text(ny["capital"]);
	$(".governor").text(ct["governor"]);
	$("li#first-senator").text(ny["usSenators"][0]);
	$("li#second-senator").text(ny["usSenators"][1]);
})











// var me = {
//   name: "Jeff Konowitch",
//   birthplace: {
//     state: "New York",
//     city: "Bronxville"
//   },
//   favoriteColor: "blue",
//   height: 73,
//   hungry: false
// };
// console.log(me["birthplace"]["city"]);
