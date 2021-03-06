(function () {
	var figure,	figureMap,canvas;					

	function gameLoop () {
		window.requestAnimationFrame(gameLoop);
		figure.update();
		figure.render();
	}
	
	function sprite (options) {

		var obj = {},
		frameIndex = 0,
		currentTick = 0,
		pauseTicks = options.pauseTicks || 0,
		numberOfFrames = options.numberOfFrames || 1;
		rowNumber = options.rowNumber;
		
		obj.context = options.context;
		obj.width = options.width;
		obj.height = options.height;
		obj.image = options.image;
		
		obj.update = function () {

			currentTick += 1;

			if (currentTick > pauseTicks) {

				currentTick = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                	frameIndex = 0;
                }
            }
        };

        obj.render = function () {

		  // Clear the canvas
		  obj.context.clearRect(0, 0, obj.width, obj.height);
		  
		  // Draw the animation context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
		  obj.context.drawImage(
		  	obj.image,
		  	(frameIndex % 8) * obj.width / numberOfFrames,
		  	(Math.floor(frameIndex/8) * obj.height + rowNumber * obj.height),
		  	obj.width / numberOfFrames,
		  	obj.height,
		  	0,
		  	0,
		  	obj.width / numberOfFrames,
		  	obj.height);
		};
		
		return obj;
	}
	
	// Get canvas
	canvas = document.getElementById("scene");
	canvas.width = 124;
	canvas.height = 93;
	
	// Create sprite sheet
	figureMap = new Image();	
	
	// Create sprite
	figure = sprite({
		context: canvas.getContext("2d"),
		width: 124*12,
		height: 93,
		image: figureMap,
		numberOfFrames: 12,
		pauseTicks: 5,
		rowNumber: 0
	});
	
	// Load sprite sheet
	figureMap.addEventListener("load", gameLoop);
	figureMap.src = "Image/catMap.png";

} ());

function p(msg){  document.getElementById("text").innerHTML =  msg;}