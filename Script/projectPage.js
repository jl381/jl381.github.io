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
  projectSelection("Blank");
});
// ----------------------------------------------------------------------

// Selection of the category of projects
function projectCategorySelection(category){
  activeProjectSection = "projectList"+category;
  document.getElementById("projectListingContent").innerHTML = document.getElementById(activeProjectSection).innerHTML;
}

// Selection of the project (load all pages)
function projectSelection(project){
  activeProject = project;


}

var softwarePages = ["dummy", "page1", "page2", "page3", "page4"];

// Flip the page of the project contents
function gotoPage(value){
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

// Section = first digit, project = second digit
function loadContentFor(section, project){
  var SOFTWARE = 1;
  var MEDIA = 2;
  var 3DMATTER = 3;
  var WEBSITE = 4;
  var OTHER = 5;
  switch(section)
  {
    ////////////////////////////////////
    case SOFTWARE:
    switch(project)
    {
      case 1:
      break;
      case 2:
      break;
      case 3:
      break;
      case 4:
      break;
      case 5:
      break;
    }
    break;
    ////////////////////////////////////
    case MEDIA:
    switch(project)
    {
      case 1:
      break;
      case 2:
      break;
      case 3:
      break;
      case 4:
      break;
      case 5:
      break;
    }
    break;
    ////////////////////////////////////
    case 3DMATTER:
    switch(project)
    {
      case 1:
      break;
      case 2:
      break;
      case 3:
      break;
      case 4:
      break;
      case 5:
      break;
    }
    break;
    ////////////////////////////////////
    case WEBSITE:
    switch(project)
    {
      case 1:
      break;
      case 2:
      break;
      case 3:
      break;
      case 4:
      break;
      case 5:
      break;
    }
    break;
    ////////////////////////////////////
    case OTHER:
    switch(project)
    {
      case 1:
      break;
      case 2:
      break;
      case 3:
      break;
      case 4:
      break;
      case 5:
      break;
    }
    break;
    ////////////////////////////////////
  }
}