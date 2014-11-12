$(function(){
  $('#grabArea').draggable({
    drag: function(){$('#block1').css('left', $(this).position().left);},
    axis: 'x',
    stop: function(){$('#block1').css('left', $(this).position().left);}
  });
});

var allowed = true;
function autoDrag(command, time, moveType1, moveType2, targetPage) {
  time = typeof time !== 'undefined' ? time : 333;
  moveType1 = typeof moveType1 !== 'undefined' ? moveType1 : "easeInQuint";
  moveType2 = typeof moveType2 !== 'undefined' ? moveType2 : "easeOutExpo";
  targetPage = typeof targetPage !== 'undefined' ? targetPage : false;

  var LEFT = 0, RIGHT = 1;
  darkenRest(false);
  allowed = false;
  switch(command){
    case LEFT:
    $("#block1").animate({opacity: 0, left: "-1000px"}, time, moveType1, 
      function() { 
        $("#block1").css({left: "1000px"}); 
        loadContentTo(changePage(1),"content");
        $("#block1").animate({opacity: 1,left: "0px"}, time, moveType2, function() {  } );
        $("#grabArea").css({opacity: 0}); 
        $("#handIcon").css({opacity: 0}); 
        allowed = true;
        if(targetPage != false) rollSlideTo(targetPage);
      } );
    break;

    case RIGHT:
    $("#block1").animate({opacity: 0, left: "1000px"}, time, moveType1, 
      function() { 
        $("#block1").css({left: "-1000px"}); 
        loadContentTo(changePage(-1),"content");
        $("#block1").animate({opacity: 1,left: "0px"}, time, moveType2, function() { } );
        $("#grabArea").css({opacity: 0}); 
        $("#handIcon").css({opacity: 0}); 
        allowed = true;
        if(targetPage != false) rollSlideTo(targetPage);
      } );
    break;
  }
}

function dragging(event) {
  var x = parseInt(document.getElementById("block1").style.left);
  if(x < -border || x > border){
    document.getElementById("block1").style.opacity = (100-(Math.abs(x)-border))/100;
    document.getElementById("grabArea").style.opacity = (100-(Math.abs(x)-border))/100;
  }  
  var o = window.getComputedStyle(document.getElementById("block1")).opacity;
  if(o <= 0.5) {
    {
      $("#grabArea").css({ opacity: 0, left: "0px" });
      if(event.stopPropagation) event.stopPropagation();
      if(event.preventDefault) event.preventDefault();
      event.cancelBubble=true;
      event.returnValue=false;
      if(x < 0) autoDrag(0,125,"linear","easeOutQuint",false); else autoDrag(1,125,"linear","easeOutQuint",false);
      return false;
    }
  }
}

var border = 175;
function resetPosition(event) {
  var x = Math.abs(parseInt(document.getElementById("block1").style.left));
  if(x > 0 && x <= (border+50)){
    $('#grabArea').draggable("disable");
    $("#grabArea").css({ opacity: 0 });
    $("#handIcon").css({ opacity: 0 });
    $("#block1").animate({opacity: 1,left: "0px"}, 300, "easeOutCirc", function() {  } );
    $("#grabArea").animate({left: "0px"}, 300, "easeOutCirc", function() { $('#grabArea').draggable("enable"); } );
  }
}

function setVisibility(value) {
  resetPosition("onmouseout");
  var x = Math.abs(parseInt(document.getElementById("block1").style.left));
  if(x < -border || x > border){}else{
    $("#handIcon").animate({opacity: value},25,"easeInCirc");
    $("#grabArea").animate({opacity: value},25,"easeInCirc");
  }
}

function arrowVisibility(value, id){;$("#"+id.id).animate({opacity: value},25,"easeInCirc");}

function p(msg){  document.getElementById("text").innerHTML =  msg;}

function darkenRest(state) {
  if(allowed){
    if(state){
      $("#darkEffect").animate({opacity: 1},325,"easeOutCirc");
      document.getElementById("leftBorder").style.visibility = "hidden";
      document.getElementById("rightBorder").style.visibility = "hidden";
      document.getElementById("darkEffect").style.visibility = "visible";
      document.getElementById("leftArrow").style.visibility = "hidden";
      document.getElementById("rightArrow").style.visibility = "hidden";
      document.getElementById("grabArea").style.visibility = "hidden";
      if(activatePageDeck){
        document.getElementById("pageDeck").style.visibility = "visible";
        document.getElementById("content").querySelector("h2").style.opacity = .75;
      }
      else
      {
        document.getElementById("content").querySelector("h2").style.opacity = 0;
      }
    }
    else{
      $("#darkEffect").animate({opacity: 0},1,"easeOutCirc");
      document.getElementById("leftBorder").style.visibility = "visible";
      document.getElementById("rightBorder").style.visibility = "visible";
      document.getElementById("darkEffect").style.visibility = "hidden";
      document.getElementById("leftArrow").style.visibility = "visible";
      document.getElementById("rightArrow").style.visibility = "visible";
      document.getElementById("grabArea").style.visibility = "visible";
      document.getElementById("pageDeck").style.visibility = "hidden";
      document.getElementById("content").querySelector("h2").style.opacity = .05;
    }
  }
}

// CHANGE THE BELOW TO ALLOW OR NOT THE DECK FOR EXTRA PAGES
var activatePageDeck = false;
// *********************************************************

var targetPage = 1;
function rollSlideTo(value){
  targetPage = value;
  if(currentPage == targetPage)return;
  if(currentPage < targetPage) 
    autoDrag(0,169,"easeInQuint","easeOutQuint",targetPage);
  else 
    autoDrag(1,169,"easeInQuint","easeOutQuint",targetPage);
}

var 
maxPages = 5, 
currentPage = 1, 
pages = ["dummyID","Home","Articles","Projects","About","Contact"];
pageSubs = ["dummyID","HomeDeck","ArticlesDeck","ProjectsDeck","AboutDeck","ContactDeck"];

function changePage(value){
  currentPage += value; 
  if(currentPage == 0) 
    {return pages[(currentPage = maxPages)];} 
  else if(currentPage == maxPages+1) 
    return pages[(currentPage = 1)];
  return pages[currentPage];
}

function loadContentTo(pageID,container){
  var temp = pages.indexOf(""+pageID);
  if(-1 != temp)currentPage = temp;
  document.getElementById(container).innerHTML = document.getElementById(pageID).innerHTML;

  var deck = pageSubs[pages.indexOf(""+pageID)];
  document.getElementById("pageDeckBar").innerHTML = document.getElementById(deck).innerHTML;

  // if(pageID == "Contact"){createAnimation("contactEffect", 30);}
}

// $(window).click(function(e) {
//   var x = e.clientX, y = e.clientY,
//   elementMouseIsOver = document.elementFromPoint(x, y);
//     // document.getElementById(elementMouseIsOver.id).style.backgroundColor = "rgba(15,10,5,.9)";
//     // document.getElementById("content").innerHTML = document.getElementById("Home").innerHTML;
//     // p(elementMouseIsOver.id);
//   });