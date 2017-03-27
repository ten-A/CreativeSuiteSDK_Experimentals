function setStr(){
	var str = $("input#textString").val();
	var customMessage = new VulcanMessage("vulcan.SuiteMessage.setMessage");
	customMessage.setPayload("GlobalStorageTest" + "," + str);
	VulcanInterface.dispatchMessage(customMessage);
}

function getStr(){
	VulcanInterface.addMessageListener("vulcan.SuiteMessage.recieve."+"GlobalStorage", recieve);
		function recieve(rt){
			alert(VulcanInterface.getPayload(rt));
		}
	var customMessage = new VulcanMessage("vulcan.SuiteMessage.getMessage");
	customMessage.setPayload("GlobalStorageTest" + "," + "GlobalStorage");
	VulcanInterface.dispatchMessage(customMessage);
}

