var border = 200;

$(function(){
  $('#grabArea').draggable({
    drag: function(){$('#block1').css('left', $(this).position().left);},
    axis: 'x',
    stop: function(){$('#block1').css('left', $(this).position().left);}
  });
});

// setInterval(function(){ 
//   document.getElementById("text").innerHTML =  $("#grabArea").position().left; 
// }, 10);

function dragging(event) {
  var x = parseInt(document.getElementById("block1").style.left);
  if(x < -border || x > border){
    document.getElementById("block1").style.opacity = (100-(Math.abs(x)-border))/100;
    document.getElementById("grabArea").style.opacity = (100-(Math.abs(x)-border))/100;
  }
}

function resetPosition(event) {
  var x = Math.abs(parseInt(document.getElementById("block1").style.left));
  if(x > 0 && x < border){
    $('#grabArea').draggable("disable");
    $("#grabArea").css({ opacity: 0 });
    $("#handIcon").css({ opacity: 0 });
    $("#block1").animate({opacity: 1,left: "0px"}, 300, "easeOutCirc", function() {  } );
    $("#grabArea").animate({left: "0px"}, 300, "easeOutCirc", function() { $('#grabArea').draggable("enable"); } );
  }
}

function setVisibility(value){
  resetPosition("onmouseout");
  var x = Math.abs(parseInt(document.getElementById("block1").style.left));
  if(x < -border || x > border){}else{
    $("#handIcon").animate({opacity: value},25,"easeInCirc");
    $("#grabArea").animate({opacity: value},25,"easeInCirc");
  }
}

function arrowVisibility(value, id){;$("#"+id.id).animate({opacity: value},25,"easeInCirc");}

// function p(msg){  document.getElementById("text").innerHTML =  msg;}

function darkenRest(state){
  if(state){
    $("#darkEffect").animate({opacity: 0.8},500,"easeOutCirc");

    document.getElementById("leftBorder").style.visibility = "hidden";
    document.getElementById("rightBorder").style.visibility = "hidden";

    document.getElementById("pageDeck").style.visibility = "visible";
    document.getElementById("darkEffect").style.visibility = "visible";
    document.getElementById("leftArrow").style.visibility = "hidden";
    document.getElementById("rightArrow").style.visibility = "hidden";
    document.getElementById("grabArea").style.visibility = "hidden";
  }
  else{
    $("#darkEffect").css({opacity: 0});

    document.getElementById("leftBorder").style.visibility = "visible";
    document.getElementById("rightBorder").style.visibility = "visible";

    document.getElementById("pageDeck").style.visibility = "hidden";
    document.getElementById("darkEffect").style.visibility = "hidden";
    document.getElementById("leftArrow").style.visibility = "visible";
    document.getElementById("rightArrow").style.visibility = "visible";
    document.getElementById("grabArea").style.visibility = "visible";
  }
}

// $(window).click(function(e) {
//     var x = e.clientX, y = e.clientY,
//         elementMouseIsOver = document.elementFromPoint(x, y);
    
//     // document.getElementById(elementMouseIsOver.id).style.backgroundColor = "rgba(15,10,5,.9)";
//     p(elementMouseIsOver.id);
// });