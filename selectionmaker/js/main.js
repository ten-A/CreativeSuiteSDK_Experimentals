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
        $("#btn_debug").click(showDevTools);
        
        $("#fillstroke").click(function () {
            csInterface.evalScript('$._slct_ILST.fillStroke()');
        });
        $("#fill").click(function () {
            csInterface.evalScript('$._slct_ILST.fill()');
        });
        $("#stroke").click(function () {
            csInterface.evalScript('$._slct_ILST.stroke()');
        });
        $("#strokeColor").click(function () {
            csInterface.evalScript('$._slct_ILST.strokeColor()');
        });
        $("#opacity").click(function () {
            csInterface.evalScript('$._slct_ILST.opacity()');
        });
        $("#svSelection").click(function () {
            csInterface.evalScript('$._slct_ILST.svSelection()');
        });
        $("#editSelection").click(function () {
            csInterface.evalScript('$._slct_ILST.editSelection()');
        });
        $("#reselect").click(function () {
            csInterface.evalScript('$._slct_ILST.reselect()');
        });
        $("#inverse").click(function () {
            csInterface.evalScript('$._slct_ILST.inverse()');
        });
        $("#nextObj").click(function () {
            csInterface.evalScript('$._slct_ILST.nextObj()');
        });
        $("#previouseObj").click(function () {
            csInterface.evalScript('$._slct_ILST.previouseObj()');
        });
        $("#symbolInst").click(function () {
            csInterface.evalScript('$._slct_ILST.symbolInst()');
        });
        $("#styleMnuItem").click(function () {
            csInterface.evalScript('$._slct_ILST.styleMnuItem()');
        });
        $("#linkBlock").click(function () {
            csInterface.evalScript('$._slct_ILST.linkBlock()');
        });
        $("#allText").click(function () {
            csInterface.evalScript('$._slct_ILST.allText()');
        });
        $("#pointText").click(function () {
            csInterface.evalScript('$._slct_ILST.pointText()');
        });
        $("#areaText").click(function () {
            csInterface.evalScript('$._slct_ILST.areaText()');
        });
        $("#strayPoint").click(function () {
            csInterface.evalScript('$._slct_ILST.strayPoint()');
        });
        $("#clippingMask").click(function () {
            csInterface.evalScript('$._slct_ILST.clippingMask()');
        });
        $("#blushStroke").click(function () {
            csInterface.evalScript('$._slct_ILST.blushStroke()');
        });
        $("#bristleBrush").click(function () {
            csInterface.evalScript('$._slct_ILST.bristleBrush()');
        });
        $("#appearlanceMenu").click(function () {
            csInterface.evalScript('$._slct_ILST.appearlanceMenu()');
        });
        $("#appearlanceAttribute").click(function () {
            csInterface.evalScript('$._slct_ILST.appearlanceAttribute()');
        });
        $("#directionHandle").click(function () {
            csInterface.evalScript('$._slct_ILST.directionHandle()');
        });
        $("#allinArtboard").click(function () {
            csInterface.evalScript('$._slct_ILST.allinArtboard()');
        });
        $("#nonfitPixgrid").click(function () {
            csInterface.evalScript('$._slct_ILST.nonfitPixgrid()');
        });
    }
        
    init();

}());
    
