/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.unified.ShellOverlayRenderer");sap.ui.unified.ShellOverlayRenderer={};
sap.ui.unified.ShellOverlayRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiUfdShellOvrly");if(c._opening){r.addClass("sapUiUfdShellOvrlyCntntHidden");r.addClass("sapUiUfdShellOvrlyOpening")}if(c._getAnimActive()){r.addClass("sapUiUfdShellOvrlyAnim")}r.writeClasses();r.write("><div>");r.write("<header class='sapUiUfdShellOvrlyHead'>");r.write("<hr class='sapUiUfdShellOvrlyBrand'/>");r.write("<div class='sapUiUfdShellOvrlyHeadCntnt'>");r.write("<div id='"+c.getId()+"-hdr-center' class='sapUiUfdShellOvrlyHeadCenter'>");sap.ui.unified.ShellOverlayRenderer.renderSearch(r,c);r.write("</div>");var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified"),C=a.getText("SHELL_OVERLAY_CLOSE");r.write("<a tabindex='0' href='javascript:void(0);' id='"+c.getId()+"-close' class='sapUiUfdShellOvrlyHeadClose'");r.writeAttributeEscaped("title",C);r.write(">");r.writeEscaped(C);r.write("</a></div></header>");r.write("<div id='"+c.getId()+"-cntnt' class='sapUiUfdShellOvrlyCntnt'>");sap.ui.unified.ShellOverlayRenderer.renderContent(r,c);r.write("</div>");r.write("</div></div>")};
sap.ui.unified.ShellOverlayRenderer.renderSearch=function(r,c){var w=c._getSearchWidth();var s="";if(w>0&&c._opening){s="style='width:"+w+"px'"}r.write("<div id='"+c.getId()+"-search' class='sapUiUfdShellOvrlySearch' "+s+"><div>");var S=c.getSearch();if(S){r.renderControl(S)}r.write("</div></div>")};
sap.ui.unified.ShellOverlayRenderer.renderContent=function(r,c){r.write("<div>");var C=c.getContent();for(var i=0;i<C.length;i++){r.renderControl(C[i])}r.write("</div>")};
