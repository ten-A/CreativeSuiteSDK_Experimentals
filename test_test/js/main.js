/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
	'use strict';

	var csInterface = new CSInterface();
	
	// Opens the chrome developer tools in host app
	function showDevTools() {
		window.__adobe_cep__.showDevTools();
	}

	// Reloads extension panel
	function reloadPanel() {
		location.reload();
	}

	function init() {
		themeManager.init();
		$("#btn_reload").click(reloadPanel);
		$("#btn_dev").click(showDevTools);
		$("#test").click(function () {
				var fl = cep.fs.showOpenDialog(false,false,"Select File",null,[])
				//var cb = csInterface.getExtensions(["com.adobe.exchange"]); 
						document.getElementById("message").innerHTML 
				= fl.data; //In this case, we get selected files full path. fl.err : get ERR code.
		});
	}
var resourceBundle = cs.initResourceBundle();
document.write(resourceBundle.key1);

	init();
}());
	
