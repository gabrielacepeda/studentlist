var peopleTardy = [];
var peopleOnTime = [];

$("#onTimeBtn").on("click" , function(){
  var personOnTime = $("#onTime").val();
  peopleOnTime.push(personOnTime);
  console.log(peopleOnTime);
  clearInputs();
});

$("#tardyBtn").on("click" , function(){
  var personTardy = $("#tardy").val();
  peopleTardy.push(personTardy);
  console.log(peopleTardy);
  clearInputs();
});

$("#showAllOnTime").on("click" , function(){
  $("#onTimeList").html("<li>"+ peopleOnTime.join("</li><li>") + "</li>");
});

$("#showAllTardy").on("click" , function(){
  $("#lateList").html("<li>"+ peopleTardy.join("</li><li>") + "</li>");
});

$("#showAll").on("click" , function(){
  $("#allPeople").html("<li>"+ peopleOnTime.concat(peopleTardy).join("</li><li>") + "</li>");
});

$("#clearAll").on("click" , function(){
  $("#onTimeList,#lateList,#allPeople").html("");
  peopleOnTime = [];
  peopleTardy = [];
});

//clear input helper method
function clearInputs(){
  $("#tardy").val("");
  $("#onTime").val("");
}


var items = [];
var clearItems =[];
var clearCompleted = [];



$("#addListBtn").on("click", function(){
  e.preventDefault();
  var add = $("#enter").val();
  $(".list").append($("<li>", {
  }));
});
// e.preventDefault();
