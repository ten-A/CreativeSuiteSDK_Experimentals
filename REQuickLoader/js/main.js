'use strict';
var csInterface = new CSInterface(); 
var counter = 0;
var fw = [], ct = [];

function init() {
	themeManager.init(); 
	}
init();

function getwords(){
	fw = $("#findWhat").val().split("\n");
	ct = $("#changeTo").val().split("\n");
	}

function aply(){
	if (fw.length!=ct.length) return;
	if (fw.length==counter) counter = 0;
	csInterface.evalScript('loadArgs("'+fw[counter]+'","'+ct[counter]+'")');
	counter = counter + 1;
	}