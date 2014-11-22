// var softwareProjects =  ["dummyProject"];
// var mediaProjects =     ["dummyProject"];
// var 3DProjects =        ["dummyProject"];
// var websiteProjects =   ["dummyProject"];
// var otherProjects =     ["dummyProject"];

// ----------------------------------------------------------------------
// function projectCategorySelection(category){

// }

var softwarePages = ["dummy", "page1", "page2", "page3", "page4"];

function slideDown(){

}

var step = 0;
function turnPage(value){
  var NEXT = 1, PREVIOUS = 2;
  switch(value){

    ///////////////////////
    case PREVIOUS:
    step += 250;
    $("#pageBank").animate({top: step+"px"},1000,"linear");
    break;

    ///////////////////////
    case NEXT:
    step -= 250;
    $("#pageBank").animate({top: step+"px"},1000,"linear");
    break;

  }
}