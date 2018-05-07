// getUserMedia only works over https in Chrome 47+, so we redirect to https. Also notify user if running from file.
	if (window.location.protocol == "file:") {

	} else if (window.location.hostname !== "localhost" && window.location.protocol !== "https:"){
				window.location.protocol = "https";
	}