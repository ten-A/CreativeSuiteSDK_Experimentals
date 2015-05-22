(function () {
	'use strict';
	var fs = require("fs");
	var csInterface = new CSInterface();
	var rb = csInterface.initResourceBundle();
	var fls, pth;

    function setPanelCallback(event) {
		if (event.data.menuId=="menuItemId1") {
			var result = window.cep.fs.showOpenDialogEx(false, true, rb.key1);
			createButton(result.data.toString());
		}
	}

	function createButton(scpath) {
		var st = "";
		localStorage.setItem('aiScriptPath', scpath);
		document.getElementById("contents").innerHTML ="";
		fls = fs.readdirSync(scpath);
		for (var i=0;i<fls.length;i++){
			pth = scpath + '/' + fls[i];
			if (fls[i].indexOf('.jsx')<0) continue;
			st = "<input type='button' class='btn' value='" + fls[i] + "' " +
				'onClick="doscript(' + "'" + pth + "'" + ')" /><br />';
			document.getElementById("contents").innerHTML += st;
		}
	}

	function init() {
		var menuXML  = '<Menu><MenuItem Id="menuItemId1" Label="' + rb.key1 + '" Enabled="true" Checked="false"/></Menu>';
		csInterface.setPanelFlyoutMenu(menuXML);
		csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", setPanelCallback);
		if (window.localStorage){
			if (localStorage.getItem('aiScriptPath')==undefined) {
				var result = window.cep.fs.showOpenDialogEx(false, true, rb.key1);
				createButton(result.data.toString());
			} else {
				createButton(localStorage.getItem('aiScriptPath'));
			}
		}
	}

	init();
	themeManager.init();
}());

function doscript(fl) {
	var csInterface = new CSInterface();
	csInterface.evalScript("callScript('" + fl + "')");
}

