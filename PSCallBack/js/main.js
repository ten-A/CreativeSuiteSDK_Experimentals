(function(){
	var csInterface = new CSInterface();
csInterface.addEventListener("documentAfterActivate", alertEvent);
function alertEvent(ev) { alert(ev.data); }
}())

