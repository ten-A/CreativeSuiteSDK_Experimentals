/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
	'use strict';
	var csInterface = new CSInterface();
	var activeDoc = "";
	csInterface.evalScript('function getNm(){try{return fl.getDocumentDOM().name;}catch(e){return null};getNm();}',
		function(payloads){
			if (payloads!=null) activeDoc = payloads;
		}
	);

	function init() {
		themeManager.init();
		csInterface.addEventListener(
			"com.adobe.events.flash.selectionChanged",
			function(ev) {
				csInterface.evalScript('function getNm(){return fl.getDocumentDOM().name;}getNm();', function(payloads){
					if (activeDoc!=payloads){
						document.getElementById("message").innerHTML = payloads;
						activeDoc = payloads;
					}
				});
		});
	}
	init();
}());
	
