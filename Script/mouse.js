// var ticks = 0;
// var previousMouseX = 0;
// var previousMouseY = 0;
// var currentMouseX = 0;
// var currentMouseY = 0;

// function closeHint(){document.getElementById("hint").style.visibility = "hidden"; $("#hint").animate({opacity: 0},500,"easeOutCirc"); ticks = 0}

// setInterval(function(){ 
//   if(previousMouseX == currentMouseX && previousMouseY == currentMouseY){if(ticks < 11)ticks++;}else{if(ticks < 10){ticks = 0;}}
//   if(ticks == 10)
//   {
//     getHintMsg(document.elementFromPoint(currentMouseX, currentMouseY).id);
//     // ticks = 0;
//   }
//   previousMouseX = currentMouseX; 
//   previousMouseY = currentMouseY;
// }, 200);

// $(window).mousemove(function(e) {
//   if(ticks > 10)closeHint();
//   currentMouseX = e.clientX; 
//   currentMouseY = e.clientY;
// });

// function getHintMsg(ID){
//   document.getElementById("hint").style.visibility = "visible";
//   $("#hint").animate({opacity: 1},1000,"easeOutCirc");
//   document.getElementById("hint").style.left = currentMouseX+"px";
//   document.getElementById("hint").style.top = currentMouseY+"px";
//   var body = document.getElementById("hint");
//   // switch(ID)
//   // {
//   //   // lenght         "To access these, see for navigation buttons beneath the<br>"
//   //   case "content": 
//   //   body.innerHTML =  
//   //   "<center><h3>Information</h3></center>"+
//   //   "To access these, see for navigation buttons beneath<br>";
//   //   break;
//   //   //
//   //   default:
//   //   body.innerHTML =  "";
//   // }
// }