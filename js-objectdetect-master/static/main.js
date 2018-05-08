window.onload = function() {

	// getUserMedia only works over https in Chrome 47+, so we redirect to https. Also notify user if running from file.
	if (window.location.protocol == "file:") {

	} else if (window.location.hostname !== "localhost" && window.location.protocol !== "https:"){
		window.location.protocol = "https";
	}
	
	//Setup API requests / navbar content
	//getDatabaseContent(); //TO-DO: currently coded into HTML page
	
	//Scale video and canvas
	var width = window.innerWidth;
	var height = window.innerHeight;
	fitVideo();
	fitCanvas();
	
	//Mobile Check
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		  document.getElementById('sliderSideBar').removeChild(document.getElementById('logo'));
		  //document.getElementById('sliderSideBar')
	}
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	var heightIncrement = 0;
	var widthIncrement = 0;
	var upButton = document.getElementById("up");
	var downButton = document.getElementById("down");
	var smoother = new Smoother([0.9999999, 0.9999999, 0.999, 0.999], [0, 0, 0, 0]),
		video = document.getElementById('video'),
		test = document.getElementById('test'),
		testContext = test.getContext('2d'),
		headband = document.getElementById('headband'),
		detector;
		document.getElementById('productName').innerText = headband.alt;
			
	try {
		compatibility.getUserMedia({video: true}, function(stream) {
			try {
				video.src = compatibility.URL.createObjectURL(stream);
			} catch (error) {
				video.src = stream;
			}
			compatibility.requestAnimationFrame(play);
		}, function (error) {
			alert('WebRTC not available');
		});
	} catch (error) {
		alert(error);
	}
	
	function play() {
		compatibility.requestAnimationFrame(play);
		if (video.paused) video.play();
		
		//procedurally scale video and video display canvas
		fitVideo();
		fitCanvas();
		testContext.clearRect(0, 0, test.width, test.height);
		
		//testContext.drawImage(logo, 0, 0, test.width/3, ((test.width/3)*173/560)); //Jess didn't want logo on video
		
		if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
			
			// Prepare the detector once the video dimensions are known:
			if (!detector) {
				var width = ~~(80 * test.width / test.height);
				var height = 80;
				detector = new objectdetect.detector(width, height, 1.1, objectdetect.frontalface_alt);
			}
			
			// Perform the actual detection:
			var left = parseInt(test.style.left);
			var top = parseInt(test.style.top);
			var roi = [ left, top, test.width, test.height ];
			//console.log("LEFT: " + left + ", TOP: " + top + ", WIDTH: " + test.width + ", HEIGHT: " + test.height);
			//var coords = detector.detect(video, 1, 2, roi);
			var coords = detector.detect(video, 1, 1);
			if (coords[0]) {
				var coord = coords[0];
				coord = smoother.smooth(coord);
				//var windowWidth = window.innerWidth
				
				// Rescale coordinates from detector to video coordinate space: //Antiquated code below:
				/*
				coord[0] *= video.offsetWidth / detector.canvas.width;
				coord[1] *= video.offsetHeight / detector.canvas.height;
				coord[2] *= video.offsetWidth / detector.canvas.width;
				coord[3] *= video.offsetHeight / detector.canvas.height;
				*/
				heightIncrement = document.getElementById('sliderHeight').value;
				heightIncrement = heightIncrement - 50;
				
				widthIncrement = document.getElementById('sliderWidth').value;
				widthIncrement = widthIncrement - 50;
				
				// Display headband overlay: 
				/*
				headband.style.left    = (coord[0] + (windowWidth - video.offsetWidth)/2) - widthIncrement + 'px';
				headband.style.top     = (coord[1] - (detector.canvas.height*2)) + heightIncrement * (1.5) + 'px';
				headband.style.width   = (coord[2] *.9) + widthIncrement * (1.5) + 'px';
				headband.style.height  = (coord[3] *.9) + 'px';
				headband.style.display = "block";
				*/
				//Debugging code below:  - Jack

				/*testContext.strokeRect(0, 0, detector.canvas.width, detector.canvas.height);
				testContext.strokeRect(coord[0], coord[1], coord[2], coord[3])*/

				//End Debugging code
				
				coord[0] *= test.width / detector.canvas.width;
				coord[1] *= test.height / detector.canvas.height;
				coord[2] *= test.width / detector.canvas.width;
				coord[3] *= test.height / detector.canvas.height;
				
				/*Debugging code below:   - Jack
			
				//testContext.strokeRect(coord[0], coord[1], coord[2], coord[3])
				
				End debugging code*/
				
				//Display headband overlay  - Jack
				
				/*Debugging:
				testContext.strokeRect((coord[0] - .5 * widthIncrement), (coord[1]  - (.5 * coord[3]) + heightIncrement), (coord[2] + widthIncrement), coord[3]);
				testContext.strokeRect(coord[0], coord[1], coord[2], coord[3]);
				*/
				testContext.drawImage(headband, (coord[0] - .5 * widthIncrement), (coord[1]  - (.5 * coord[3]) + heightIncrement), (coord[2] + widthIncrement), coord[3]);
				
			} else {
				headband.style.display = "none";
			}
		}
	}
	
	window.addEventListener("resize", resizeVideo, false);
	function resizeVideo() {
	/*
		width = window.innerWidth;
		console.log("width: " + width);
		height = window.innerHeight;
		console.log("height: " + height);
		if(height > width) {
			video.width = width;
			video.height =
		} else {
		
			video.height = height;
			video.left = (width - video.offsetWidth)/2;
		}

		test.left = video.left;
		test.height = video.offsetHeight;
		test.width = video.offsetWidth;
		test.top = video.top;
		
		test.bottom = video.bottom;
	*/
		fitVideo();
		fitCanvas();
		detector = null;
	}		
};