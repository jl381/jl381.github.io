// var softwareProjects =  ["dummyProject"];
// var mediaProjects =     ["dummyProject"];
// var 3DProjects =        ["dummyProject"];
// var websiteProjects =   ["dummyProject"];
// var otherProjects =     ["dummyProject"];
var activeProjectSection = "none";
var activeProject = "none";

// ----------------------------------------------------------------------
$(function(){
  projectCategorySelection("Software");
  loadProjectContent("Blank");
});
// ----------------------------------------------------------------------

function projectCategorySelection(category){
  activeProjectSection = "projectList"+category;
  document.getElementById("projectListingContent").innerHTML = document.getElementById(activeProjectSection).innerHTML;
}

function loadProjectContent(project){
  activeProject = project;


}

var softwarePages = ["dummy", "page1", "page2", "page3", "page4"];

function turnPage(value){
  $("#pageBank").animate({top: -((value-1)*553)+"px"},1000,"easeInOutCirc");
}

function throwUp(project){
  var TIME = 100;
  var element = $(project.querySelector("img"));

  if(project.querySelector("img").offsetTop == -5)
    element.animate({top: "-15px"},TIME*3,"easeOutCirc", function()
    {
      element.animate({top: "-5px"},TIME*9,"easeOutBounce");
    }
    );
}