 // Global variables
 var div = "-";
 var paper = "-";
 var shapeArray = [];
 var borderMean = 50;
 var sMIN = 2, sMAX = 10;
 var shapeAmonut = 30;

 var refreshRate = 20;
 var shapeAmonut = 30;

// The function starts up the whole animation process: creates paper, creates shapes, creates function-check like act
function createAnimation(ID, amount)
{
  div = ID;
  paper = Raphael(div);
  shapeAmonut = amount;
  paper.rect(div, 0, 0).attr({"fill-opacity": 0, "stroke-opacity": 1, "stroke-color": "#ffffff"});
  adjustPaper();

  for (var i = 0; i < shapeAmonut; i++) { shapeArray[shapeArray.length] = new Shape();};
    setInterval(function(){act();}, 50);
  setInterval(function(){acto();}, refreshRate);
}

function acto(){
  var s2d = rand(sMIN,sMAX);
  var shape = shapeArray[rand(0,shapeArray.length)];
  shape.obj.attr({fill: randColor()});
        shape.obj.animate({"width": s2d, "height": s2d}, 250, "bounce");
}

function adjustPaper()
{
  var windowHeight = window.innerHeight;
  var a = document.getElementById(div).offsetWidth;
  var b = document.getElementById(div).offsetHeight;
  paper.setSize(a,b);
}

// Function Shape is the container for graphics and other variables
var Shape = function()
{
  // Direction doesn't change
  this.direction = rand(1,250);
  // Draw a shape on paper: Shape object, squareSide, position X, is it the first time it gets drawn?
  drawShape(this, rand(sMIN,sMAX), rand(125, paper.width-125), true);
}  

// Function covers a lot of aspects that will instruct shapes to float in specific ways
function drawShape(shape, shapeWidth, posX, firstTime)
{
  // distance is the total to be walked (used to adjust movement speed later on, since it is based around time)
  shape.distance = 0; 

  // speed, the higher the divisor, the slower shape will when moving
  var speed = 1/rand(1, 2);

  // opacity gets randomized each time shape is drawn
  var opacity = rand(20,60)*0.01;

  // initialOpacity is used to smooth up the fading in and out, which is based around: iniOpa * [0.0...1.0]
  shape.initialOpacity = opacity;

  // this is where it checks if the shape is to be drawn for the first time or not, if not, then only do the adjustments
  if(typeof(firstTime)==='undefined')
  {
    // This section is for "not first time"
    // distance calculation formula becomes same for both cases of direction
    shape.distance = paper.width - shapeWidth;

    // This is where the adjustments happen
    shape.obj.attr({"x": posX, "y": rand(0,paper.height - sMAX), "width": shapeWidth, "height": shapeWidth});

    // Adjusts extra stuff, color and opacity
    shape.obj.attr({fill: randColor(), 'fill-opacity': 0});
  }
  else
  {
    // This creates another vector graphics using the given data
    shape.obj = paper.rect( posX, rand(0,paper.height - sMAX), shapeWidth, shapeWidth);

    // shape.obj.transform("r"+rand(0,360));
    // Adjusts extra stuff, color and opacity
    shape.obj.attr({fill: randColor(), 'fill-opacity': opacity, 'stroke-opacity': 0.25})
    // .mouseout(
    //   function () 
    //   {
    //     var s2d = rand(10,30);
    //     shape.obj.animate({"width": s2d, "height": s2d}, 250, "bounce");
    //   }
    //   )
    // ;
  }


  // Depending upon the direction of vector graphics, the distance gets calculated as well as the destination point sets up one time only
  var LEFT = 1, RIGHT = 2;
  switch(shape.direction)
  {
    case LEFT: 
    shape.destination = 0; 
    shape.distance = shape.obj.attr("x");
    break;

    case RIGHT: 
    shape.destination = paper.width - shapeWidth; 
    shape.distance = paper.width - shape.obj.attr("x") - shapeWidth; 
    break;
  }

  // Animate instruction is sent here
  shape.obj.animate({x: shape.destination, y: shape.obj.attr("y")}, shape.distance/speed, ">");

  shape.borderMeanRight = paper.width - borderMean - shape.obj.attr("width");
}

// Act function provides a control over the "current" status or data of the vector graphics
// This is mostly used to check when it must fade out or fade in
function act()
{    
  // Iterate over the array of all vector graphics imported at the time of their creation
  for (var i = 0; i < shapeArray.length; i++)
  {
    var shape = shapeArray[i]; 
    var xPos = shape.obj.attr("x");

    // the line below is used to output some important data for debugging
    // p("x: "+Math.round(shape.obj.attr("x"))+"<br>direction: "+shape.direction+"<br>width: "+shape.obj.attr("width")+"<br>alpha: "+shape.obj.attr("fill-opacity"));

    // Is the element standing at the lift or at the right edge?
    if(xPos == shape.destination)
    {
      var LEFT = 1, RIGHT = 2;
      // Randomizing the shape's width allows us to have its placement on X axis accuratelly done (since we change size, changes where it must be placed too)
      var shapeWidth = rand(sMIN,sMAX);
      switch(shape.direction)
      {
        // By not mentioning "firstTime", the program will know it is not the first time.
        case LEFT: drawShape(shape, shapeWidth, (paper.width - shapeWidth - 1) ); break;
        case RIGHT: drawShape(shape, shapeWidth, 1); break;
      }
      return;
    }

    if( xPos < borderMean )
    {
      opacity = shape.initialOpacity * xPos / borderMean;
      shape.obj.attr({'fill-opacity': opacity});
    }
    else if ( xPos > shape.borderMeanRight )
    {
      opacity = (shape.initialOpacity * (borderMean - (xPos - shape.borderMeanRight))) / borderMean;
      shape.obj.attr({'fill-opacity': opacity});
    }
    else
    {
      // Re-establish alpha channel when it is out of the "fade zone"
      shape.obj.attr({'fill-opacity': shape.initialOpacity});
    }
  }
}

window.onresize = function() 
{
  adjustPaper();
}

function rand(from,to){return Math.floor(Math.random()*(to-from+1)+from);}
function randColor()
{
  var next = 0;
  var result = "";
  for( i = 1; i <= 6; i++)
  {
    next = rand(0,15);
    switch (next)
    {
      case 10 :
      result += "A";
      break;

      case 11 :
      result += "B";
      break;

      case 12 :
      result += "C";
      break;

      case 13 :
      result += "D";
      break;

      case 14 :
      result += "E";
      break;

      case 15 :
      result += "F";
      break;

      default:
      result += ""+next;
    }
  }
  return "#"+result;
}