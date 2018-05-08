/**
 * @namespace Allows access to webRTC and other features for browsers that are
 * not conforming to the latest standard (yet). Supported Browsers are: 
 * Chrome, Opera and Firefox (soon).
 */
 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if(!window.requestAnimationFrame)
	window.requestAnimationFrame = function (callback, element) {
	  var currTime = new Date().getTime();
	  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	  var id = window.setTimeout(function () {
		callback(currTime + timeToCall);
	  },
	  timeToCall);
	  lastTime = currTime + timeToCall;
	  return id;
  };
  if(!window.cancelAnimationFrame)
	window.cancelAnimationFrame = function (id) {
	  clearTimeout(id);
  };
}());

var compatibility = (function() {
	var lastTime = 0,
	
		URL = window.URL || window.webkitURL,
		requestAnimationFrame = function(callback, element) {
			var requestAnimationFrame =
				window.requestAnimationFrame		|| 
				window.webkitRequestAnimationFrame	|| 
				window.mozRequestAnimationFrame		|| 
				window.oRequestAnimationFrame		||
				function(callback, element) {
		            var currTime = new Date().getTime();
		            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		            var id = window.setTimeout(function() {
		            	callback(currTime + timeToCall);
		            }, timeToCall);
		            lastTime = currTime + timeToCall;
		            return id;
		        };
	
			return requestAnimationFrame.call(window, callback, element);
		},
		
		getUserMedia = function(options, success, error) {
			var getUserMedia =
				window.navigator.getUserMedia ||
				window.navigator.mozGetUserMedia ||
				window.navigator.webkitGetUserMedia ||
				function(options, success, error) {
					error();
				};
			
			return getUserMedia.call(window.navigator, options, success, error);
		};

	return {
		URL: URL,
		requestAnimationFrame: requestAnimationFrame,
		getUserMedia: getUserMedia
	};
})();
