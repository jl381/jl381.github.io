// var softwareProjects =  ["dummyProject"];
// var mediaProjects =     ["dummyProject"];
// var 3DProjects =        ["dummyProject"];
// var websiteProjects =   ["dummyProject"];
// var otherProjects =     ["dummyProject"];

// ----------------------------------------------------------------------
// function projectCategorySelection(category){

// }

var softwarePages = ["dummy", "page1", "page2", "page3", "page4"];

function turnPage(value){
  $("#pageBank").animate({top: -((value-1)*553)+"px"},1000,"easeInOutCirc");
}