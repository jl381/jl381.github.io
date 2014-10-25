var progress = false;

$(function(){
  $('#holder').draggable({
    drag: function(){$('#block1').css('left', $(this).position().left);},
    axis: 'x',
    stop: function(){$('#block1').css('left', $(this).position().left);}
  });
});

setInterval(function(){ 
  document.getElementById("text").innerHTML = 
  $("#holder").position().left + " " + $("#block1").position().left; 

}, 10);