(function(){
	VulcanInterface.addMessageListener("vulcan.SuiteMessage.getMessage", getMessage);
	VulcanInterface.addMessageListener("vulcan.SuiteMessage.setMessage", setMessage);
	function getMessage(message) {
		var st = "";
		var str = VulcanInterface.getPayload(message).split(",");
		if (window.localStorage) {
			if (localStorage.getItem(str[0])!==undefined) st = localStorage.getItem(str[0]);
			var customMessage = new VulcanMessage("vulcan.SuiteMessage.recieve." + str[1]);
			customMessage.setPayload(st);
			VulcanInterface.dispatchMessage(customMessage);
		}
	}
	function setMessage(message) {
		if (window.localStorage) {
			var str = VulcanInterface.getPayload(message).split(",");
			if (window.localStorage) localStorage.setItem(str[0],str[1]);
		}
	}
}())


/*
How to set and get messages.
1.Set message
Make key and value pair(String) and join with delimter ",". Build custom message and dispatch it.

Ex:
var customMessage = new VulcanMessage("vulcan.SuiteMessage.setMessage);
customMessage.setPayload("KEY" + "," + "VALUE");
VulcanInterface.dispatchMessage(customMessage);

2.Get message
Need 2 arguments KEY and Listener name which you can recieve value. Sets listener and listen it. Build message and dispatch it.

Ex:
VulcanInterface.addMessageListener("vulcan.SuiteMessage.recieve."+"LISTENER_NAME", recieve);
function recieve(){
	alert(getPayload(message));
}
var customMessage = new VulcanMessage("vulcan.SuiteMessage.getMessage);
customMessage.setPayload("KEY" + "," + "LISTENER_NAME");
VulcanInterface.dispatchMessage(customMessage);

*VulcanInterface is singleton instance, So you do not need make any instances.
*/
