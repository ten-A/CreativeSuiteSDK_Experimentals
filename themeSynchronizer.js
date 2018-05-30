/*
	Theme Synchronizer.js ver.0.0.1 beta
	load with CSInterface.js and initialize in main JavaScript file.
	themeSynchironizer will switch UI skin automatically.
	
	ex:
		themeSynchronizer.init();

	2018.5.30 Ten A. 
*/

var themeSynchronizer = (function () {
	'use strict';
	function toHex(color, delta) {
		function colour(value, delta) {
			var clr = !isNaN(delta) ? value + delta : value;
			if (clr < 0) clr = 0;
			else if (clr > 255) clr = 255;
			clr = Math.floor(clr).toString(16);
			return clr.length === 1 ? "0" + clr : clr;
			}
		var hex = "";
		if (color) hex = colour(color.red, delta) + colour(color.green, delta) + colour(color.blue, delta);
		return hex;
		}

	function reverseColor(clr, delta) {
		 return toHex({
			red: Math.abs(255 - clr.red),
			green: Math.abs(255 - clr.green),
			blue: Math.abs(255 - clr.blue)
			}, delta);
		}

	function addRule(stylesheetId, selector, rule) {
		var ss = document.getElementById(stylesheetId);
		if (ss) {
			ss = ss.sheet;
			if (ss.addRule) ss.addRule(selector, rule);
			else if (ss.insertRule) ss.insertRule(selector + ' { ' + rule + ' }', ss.cssRules.length);
			}
		}

	function updateTheme(appSkinInfo) {
		var baseClr = appSkinInfo.panelBackgroundColor.color;
		var bg_clr = toHex(baseClr);
		var elt_bk =  toHex(baseClr, 20);

		var font_clr = "F0F0F0";
		if (baseClr.red > 122) font_clr = "000000";
		var border_clr = toHex(baseClr, -100);
		var styleId = "hostStyle";
		addRule(styleId, "body", "background-color:" + "#" + bg_clr);
		addRule(styleId, "body", "color:" + "#" + font_clr);

		addRule(styleId, "button", "background-color:" + "#" + elt_bk);
		addRule(styleId, "button:hover", "background-color:" + "#" + bg_clr);
		addRule(styleId, "button:active", "background-color:" + "#" + elt_bk);
		addRule(styleId, "button", "border-color: " + "#" + border_clr);
		addRule(styleId, "button", "color: " + "#" + font_clr);

		addRule(styleId, ".hostFont", "color:" + "#" + font_clr);
		addRule(styleId, ".hostBgd", "background-color:" + "#" + bg_clr);
		addRule(styleId, ".hostElt", "background-color:" + "#" + elt_bk);
		addRule(styleId, ".hostElt", "border-color: " + "#" + border_clr);
		}

	function onAppThemeColorChanged(event) {
		//console.log("event fired...");
		var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
		updateTheme(skinInfo);
		}

	function init() {
		var csi = new CSInterface();
		updateTheme(csi.hostEnvironment.appSkinInfo);
		csi.addEventListener("com.adobe.csxs.events.ThemeColorChanged", onAppThemeColorChanged);
		//console.log("start listen");
		}

return {
	init: init
	};
}());
