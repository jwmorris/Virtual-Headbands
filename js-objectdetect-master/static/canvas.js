function fitCanvas() {
	var canvas = document.getElementById('test');
	var video = document.getElementById('video');

	var aspectRatio = video.videoHeight/video.videoWidth;
	var top = 0;
	var left = 0;
	console.log("Aspect: " + aspectRatio);
	if( (video.height/video.width) > aspectRatio ) { //too tall
		console.log("screen too tall: resizing video");
		canvas.width = video.offsetWidth;
		canvas.height = aspectRatio*video.offsetWidth;
		//console.log("Trying to set height to" + canvas.height + " pixels...");
		top = (video.offsetHeight - canvas.height)/2;
		canvas.style.top = `${top}px`;
		canvas.style.left = `${left}px`;
	} else { //too wide
		console.log("screen too : resizing video");
		canvas.height = video.offsetHeight;
		canvas.width = video.offsetHeight/aspectRatio;
		left = (video.offsetWidth - canvas.width)/2;
		//console.log("Trying to set width to" + canvas.width + " pixels...");
		
	}
	canvas.style.top = `${top}px`;
	canvas.style.left = `${left}px`;
	canvas.style.right = `${left}px`;
	
	if( top > 0) {
		//console.log(`Trying to set top to ${top}px`);
		canvas.style.top = `${top}px`;
		canvas.style.left = "0px";
	}
	//console.log("canvas top: " + (video.offsetHeight - canvas.height)/2);
	//canvas.style.left = (video.offsetWidth - canvas.width)/2;
	//var context = canvas.getContext('2d');
	//video.addEventListener('play', function() {
	//	draw(this, context, this.videoWidth, this.videoHeight);
	//}, false);
	//
	//function draw(video, context, width, height) {
	//	context.drawImage(video, 0, 0, width, height);
	//	setTimeout(draw, 20, video, context, width, height);
	//}
}