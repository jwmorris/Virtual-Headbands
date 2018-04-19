function fitVideo() {
	var canvas = document.getElementById('test');
	var video = document.getElementById('video');
	video.width = window.innerWidth;
	video.height = window.innerHeight;
	console.log("video fit");
	console.log(video.videoWidth + " x " + video.videoHeight);
	//console.log("attempting to resize canvas to: " video.videoWidth + " x " video.videoHeight);
	//canvas.width = video.videoWidth;
	//canvas.height = window.videoHeight;
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