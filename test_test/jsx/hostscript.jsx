/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

$._getPM_IDSN = {
	getPMetrics : function(){
		var result = "";
		for (var a in PerformanceMetricOptions)
			result += a + String.fromCharCode(9) 
				+ app.performanceMetric(PerformanceMetricOptions[a])
				+ String.fromCharCode(13);
		return result;
		}
	}
