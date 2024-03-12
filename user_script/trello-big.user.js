// ==UserScript==
// @name           Trello : Big Edit
// @author         Justin Kelly http://justin.kelly.org.au @_justin_kelly
// @version        1
// @include        https://trello.com/*
// @include        http://trello.com/*
// ==/UserScript==

cssString = ' '+
	'.window{ '+
	'	left:0px !important; ' +
	'	top:0px !important; ' +
	'	width:100% !important; '+
	'	margin-left: 24px; '+
	'	margin-right: 24px; '+
	'} '+
	' '+
	'.window-main-col '+
	'{ '+
	'	width:calc(100% - 348px) !important; '+
	'} '+
	'.window-wrapper{ '+
	'	height: 100%; '+
	'}' +
	'.window-sidebar{ '+
	'	width: 300px; '+
	'}';

insertCSS(cssString);
// Function to insert CSS
function insertCSS(cssToInsert) {
	var head=document.getElementsByTagName('head')[0];
	if(!head)
		return;
	var style=document.createElement('style');
	style.setAttribute('type','text/css');
	style.appendChild(document.createTextNode(cssToInsert));
	head.appendChild(style);
}
