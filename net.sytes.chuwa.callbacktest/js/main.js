/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
	'use strict';
	var csInterface = new CSInterface();
	var message = "";
	function init() {
		themeManager.init();
		csInterface.addEventListener("getCallback", function(evt) {
			message = evt.data;
			$("#textarea").text(message);
			});
		$("#btn_evalFunction").click(function () {
			csInterface.evalScript("testFunc()", function(e){
			});
		});
	}
	init();
}());
	
