if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
	          	
	// Prepare the detector once the video dimensions are known:
	if (!detector) {
		var width = ~~(60 * video.offsetWidth / video.offsetHeight);
				var height = 60;
		detector = new objectdetect.detector(width, height, 1.1, objectdetect.frontalface_alt);
	}
	
	// Perform the actual detection:
	var coords = detector.detect(video, 1);
	if (coords[0]) {
		var coord = coords[0];
		coord = smoother.smooth(coord);
		var windowWidth = window.innerWidth
		
		// Rescale coordinates from detector to video coordinate space:
		coord[0] *= video.offsetWidth / detector.canvas.width;
		coord[1] *= video.offsetHeight / detector.canvas.height;
		coord[2] *= video.offsetWidth / detector.canvas.width;
		coord[3] *= video.offsetHeight / detector.canvas.height;
		
		//upButton.onclick = function(){
		//	if(increment + coord[1] > 0) {	
		//		increment -= 10;
		//	}
		//}
		//downButton.onclick = function(){
		//  if((increment + coord[1])< video.offsetHeight) {
		//	increment += 10;
		//  }
		//}
		heightIncrement = document.getElementById('sliderHeight').value;
		heightIncrement = heightIncrement - 50;
		
		widthIncrement = document.getElementById('sliderWidth').value;
		widthIncrement = widthIncrement - 50;
		
		// Display headband overlay: 
		headband.style.left    = (coord[0] + (windowWidth - video.offsetWidth)/2) - widthIncrement + 'px';
		headband.style.top     = (coord[1] - (detector.canvas.height*2)) + heightIncrement * (1.5) + 'px';
		headband.style.width   = (coord[2] *.9) + widthIncrement * (1.5) + 'px';
		headband.style.height  = (coord[3] *.9) + 'px';
		headband.style.display = "block";
		
	} else {
		headband.style.display = "none";
	}
}  	