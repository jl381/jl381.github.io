window.onresize = function() 
{

}


function lightUp(){
	var speed = 2000, maxVis = 75, minVis = 0, A, T = maxVis, ID=0;
	setInterval(
		function(){ 
			if(T == maxVis) A = true; else if(T == minVis) A = false;
			if(A && T != minVis) {T -= 1;} else {T += 1;}
			setGradient(T/100);
		}, speed);
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

function rand(from,to){
	return Math.floor(Math.random()*(to-from+1)+from);
}
















function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function print(msg){ document.getElementById("red").innerHTML = msg; }