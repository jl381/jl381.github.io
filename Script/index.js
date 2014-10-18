window.onresize = function() 
{

}

function getCssProperty(elmId, property){
   var elem = document.getElementById(elmId);
   return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function print(msg){ document.getElementById("red").innerHTML = msg; }