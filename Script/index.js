window.onresize = function() 
{

}



window.onscroll = function()
{
	setGradient(1 - getScrollY()/(document.body.clientHeight-window.innerHeight));
}

function setGradient(value){
	document.getElementById("lightEffect").style.background = 
	'-webkit-linear-gradient(left, rgba(0,0,0,1), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,1))';
	document.getElementById("lightEffect").style.background = 
	'-o-linear-gradient(right, rgba(0,0,0,1), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,1))'; 
	document.getElementById("lightEffect").style.background = 
	'-moz-linear-gradient(right, rgba(0,0,0,1), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,1))';
	document.getElementById("lightEffect").style.background = 
	'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,'+value+'), rgba(0,0,0,1))';
}

function getScrollY() {
  var scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
  } else if( document.body && document.body.scrollTop ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
  } else if( document.documentElement && document.documentElement.scrollTop ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
  }
  return scrOfY;
}

function rand(from,to){
  return Math.floor(Math.random()*(to-from+1)+from);
}

function getCssProperty(elmId, property){
 var elem = document.getElementById(elmId);
 return window.getComputedStyle(elem,null).getPropertyValue(property);
}

// !!! DEECATED !!! \\
// function lightUp()
// {
// 	var speed = 200, maxVis = 75, minVis = 0, A, T = maxVis, ID=0;
// 	setInterval(
// 		function(){ 
// 			if(T == maxVis) A = true; else if(T == minVis) A = false;
// 			if(A && T != minVis) {T -= 1;} else {T += 1;}
// 			setGradient(T/100);
// 		}, speed);
// }