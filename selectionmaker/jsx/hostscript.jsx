/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


$._slct_ILST={
	fillStroke : function(){
		app.executeMenuCommand('Find Fill & Stroke menu item'); 
		},
	fill : function(){
		app.executeMenuCommand('Find Fill Color menu item'); 
		},
	stroke : function(){
		app.executeMenuCommand('Find Stroke Weight menu item'); 
		},
	strokeColor : function(){
		app.executeMenuCommand('Find Stroke Color menu item'); 
		},
	opacity : function(){
		app.executeMenuCommand('Find Opacity menu item'); 
		},
	svSelection : function(){ //save selection
		app.executeMenuCommand('Selection Hat 10'); 
		},
	editSelection : function(){ //edit selection
		app.executeMenuCommand('Selection Hat 11'); 
		},
	reselect : function(){
		app.executeMenuCommand('Find Reselect menu item'); 
		},
	inverse : function(){
		app.executeMenuCommand('Inverse menu item'); 
		},
	nextObj : function(){ //select next object
		app.executeMenuCommand('Selection Hat 9'); 
		},
	previouseObj : function(){ //select previouse object
		app.executeMenuCommand('Selection Hat 8'); 
		},
	symbolInst : function(){
		app.executeMenuCommand('Find Symbol Instance menu item'); 
		},
	styleMnuItem : function(){
		app.executeMenuCommand('Find Style menu item'); 
		},
	linkBlock : function(){
		app.executeMenuCommand('Find Link Block Series menu item'); 
		},
	allText : function(){
		app.executeMenuCommand('Text Objects menu item'); 
		},
	pointText : function(){
		app.executeMenuCommand('Point Text Objects menu item'); 
		},
	areaText : function(){
		app.executeMenuCommand('Area Text Objects menu item'); 
		},
	strayPoint : function(){
		app.executeMenuCommand('Stray Points menu item'); 
		},
	clippingMask : function(){
		app.executeMenuCommand('Clipping Masks menu item'); 
		},
	blushStroke : function(){
		app.executeMenuCommand('Brush Strokes menu item'); 
		},
	bristleBrush : function(){
		app.executeMenuCommand('Bristle Brush Strokes menu item'); 
		},
	appearlanceMenu : function(){
		app.executeMenuCommand('Find Appearance menu item'); 
		},
	appearlanceAttribute : function(){
		app.executeMenuCommand('Find Appearance Attributes menu item'); 
		},
	directionHandle : function(){ //select direction handle
		app.executeMenuCommand('Selection Hat 1');
		},
	allinArtboard : function(){
		app.executeMenuCommand('selectallinartboard'); 
		},
	nonfitPixgrid : function(){ //select nonfit pixel grid object
		app.executeMenuCommand('Selection Hat 12');
		}
	};
