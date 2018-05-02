function fitVideo() {
	var canvas = document.getElementById('test');
	var video = document.getElementById('video');
	video.width = window.innerWidth;
	video.height = window.innerHeight;
	console.log("video fit");
	console.log(video.videoWidth + " x " + video.videoHeight);
}