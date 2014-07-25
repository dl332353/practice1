/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.ThingViewerRenderer");sap.ui.ux3.ThingViewerRenderer={};
sap.ui.ux3.ThingViewerRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.writeAttributeEscaped("style","width:"+c.getWidth()+"; height:"+c.getHeight());a.addClass('sapUiUx3TV');a.writeClasses();a.write(">");this.renderContent(a,c);a.write("</div>")};
sap.ui.ux3.ThingViewerRenderer.renderContent=function(r,c){var a=r,h=c.getHeaderType();a.write("<div role='Main' class='sapUiUx3TVContent' id='"+c.getId()+"-content'>");a.write("<div class='sapUiUx3TVHeader sapUiUx3TVNoActionBar");if(c.getHeaderType()===sap.ui.ux3.ThingViewerHeaderType.Standard){a.write("'>")}else{a.write(" sapUiUx3TVhorizontal'>")}a.write("<div class='sapUiUx3TVHeaderContainerIdentifier'>");a.write("<span role='heading' aria-level='1' class='sapUiUx3TVIdentifier'");a.writeAttributeEscaped("title",c.getType());a.write(">");a.writeEscaped(c.getType());a.write("</span>");a.write("</div>");if(h===sap.ui.ux3.ThingViewerHeaderType.Standard){a.write("<div class='sapUiUx3TVHeaderGroupScrollContainer'>");a.write("<div id='"+c.getId()+"-header' class='sapUiUx3TVHeaderContainer'>");this.renderHeader(a,c);a.write("</div>")}else{a.write("<div id='"+c.getId()+"-header' class='sapUiUx3TVHeaderContainer'>");this.renderHeader(a,c);a.write("</div>");a.write("<div class='sapUiUx3TVHeaderGroupScrollContainer sapUiUx3TVhorizontal'>")}a.write("<div id='"+c.getId()+"-headerContent'");if(h===sap.ui.ux3.ThingViewerHeaderType.Standard){a.write(">")}else{a.write("style='height:100%; white-space:nowrap'>")}this.renderHeaderContent(a,c);a.write("</div>");a.write("</div>");a.write("</div>");a.write("<div class='sapUiUx3TVFacets sapUiUx3TVNoActionBar");if(h===sap.ui.ux3.ThingViewerHeaderType.Standard){a.write("'>")}else{a.write(" sapUiUx3TVhorizontal'>")}a.write("<div role='Navigation' class='sapUiUx3TVFacetBar'>");a.renderControl(c._getNavBar());a.write("</div>");a.write("<div id='"+c.getId()+"-facetContent' class='sapUiUx3TVFacetContent sapUiBodyBackground'>");this.renderFacetContent(a,c);a.write("</div>");a.write("</div>");this.renderToolbar(a,c);a.write("</div>")};
sap.ui.ux3.ThingViewerRenderer.addRootClasses=function(r,c){var a=r;a.addClass("sapUiUx3TV")};
sap.ui.ux3.ThingViewerRenderer.addOverlayClasses=function(r,c){var a=r;a.addClass("sapUiUx3TVOverlay")};
sap.ui.ux3.ThingViewerRenderer.renderHeader=function(r,c){var a=r;a.write("<div class='sapUiUx3TVIconBar'>");a.writeIcon(c.getIcon(),["sapUiUx3TVIcon"],{role:'presentation',id:c.getId()+'-swatch'});a.write("<div class='sapUiUx3TVTitle'>");a.write("<span role='heading' aria-level='2' class='sapUiUx3TVTitleFirst'");a.writeAttributeEscaped("title",c.getTitle());a.write(">");a.writeEscaped(c.getTitle());a.write("</span><br/>");a.write("<span role='heading' aria-level='3' class='sapUiUx3TVTitleSecond'");a.writeAttributeEscaped("title",c.getSubtitle());a.write(">");a.writeEscaped(c.getSubtitle());a.write("</span>");a.write("</div>");a.write("</div>")};
sap.ui.ux3.ThingViewerRenderer.renderToolbar=function(r,c){if(c.getActionBar()){r.write("<div id='"+c.getId()+"-toolbar' class='sapUiUx3TVToolbar'>");r.renderControl(c.getActionBar());r.write("</div>")}};
sap.ui.ux3.ThingViewerRenderer.renderHeaderContent=function(r,c){var h=c.getHeaderContent(),a=c.getHeaderType();for(var i=0;i<h.length;i++){var b=h[i];if(a===sap.ui.ux3.ThingViewerHeaderType.Standard){r.write("<hr class='sapUiUx3TVHRWhite'>")}r.write("<div class='sapUiUx3TVHeaderContainer");if(a===sap.ui.ux3.ThingViewerHeaderType.Standard){r.write("' role='form'>")}else{r.write(" sapUiUx3TVhorizontal' role='form'>")}if(b.getTitle()){r.write("<div class='sapUiUx3TVHeaderGroupTitle'");r.writeAttributeEscaped("title",b.getTooltip_AsString()?b.getTooltip_AsString():b.getTitle());r.write("><span role='heading' aria-level='4'>");r.writeEscaped(b.getTitle());r.write("</span>");r.write("</div>")}r.write("<div class='sapUiUx3TVHeaderGroupContent'>");var d=b.getContent();for(var j=0;j<d.length;j++){var e=d[j];r.renderControl(e)}r.write("</div>");r.write("</div>")}};
sap.ui.ux3.ThingViewerRenderer.renderFacetContent=function(r,c){var f=c.getFacetContent();var t=true;if(f.length==1){t=false}for(var i=0;i<f.length;i++){var g=f[i];if(g.getColspan()){r.write("<div class='sapUiUx3TVFacetThingGroupSpan' role='form'>")}else{r.write("<div class='sapUiUx3TVFacetThingGroup' role='form'>")}if(t){r.write("<div class='sapUiUx3TVFacetThingGroupContentTitle'");r.writeAttributeEscaped("title",g.getTooltip_AsString()?g.getTooltip_AsString():g.getTitle());r.write("><span role='heading'>");r.writeEscaped(g.getTitle());r.write("</span></div>")}r.write("<div class='sapUiUx3TVFacetThingGroupContent'>");var a=g.getContent();for(var j=0;j<a.length;j++){r.renderControl(a[j])}r.write("</div></div>")}};
