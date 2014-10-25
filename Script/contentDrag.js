var border = 300;

$(function(){
  $('#grabArea').draggable({
    drag: function(){$('#block1').css('left', $(this).position().left);},
    axis: 'x',
    stop: function(){$('#block1').css('left', $(this).position().left);}
  });
});

setInterval(function(){ 
  document.getElementById("text").innerHTML =  $("#grabArea").position().left; 
}, 10);

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
    $("#handIcon").animate({opacity: value},250,"easeInCirc");
    $("#grabArea").animate({opacity: value},250,"easeInCirc");
  }
}

function arrowVisibility(value, id){;$("#"+id.id).animate({opacity: value},250,"easeInCirc");}