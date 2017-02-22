(function () {
	'use strict';
	var csInterface = new CSInterface();
	function init() {
		themeManager.init();
		$("#start").click(function () {
			var str = $("#tx").val();
			csInterface.evalScript('startWork("' + str + '")');
			});
		$("#stop").click(function () {
			csInterface.evalScript('stopWork()');
			});
	}
	init();
}());
	
