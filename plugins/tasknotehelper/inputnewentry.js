/*\
title: $:/plugins/edersasch/tasknotehelper/inputnewentry.js
type: application/javascript
module-type: macro

Add a non-draft tiddler with tags and fields

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "inputnewentry";

exports.params = [
	{name: "tmp", default: "$:/temp/inputnewentry"},
	{name: "placeholder", default: "new entry"},
	{name: "tags"},
	{name: "keepafteradd", default: "no"},
	{name: "fields"}
];

/*
Run the macro
*/
exports.run = function(tmp, placeholder, tags, keepafteradd, fields) {
	var createfields = "",
		fieldsvals = [],
		fieldval = [],
		i = 0,
		ret = "<$edit-text tiddler='" + tmp + "' field='" + placeholder + "' placeholder='" + placeholder + "' focusPopup=<<qualify '$:/state/popup/inputnewentry'>> class='tc-popup-handle'/>";
	fieldsvals = fields.split(",");
	while (i < fieldsvals.length) {
		fieldval = fieldsvals[i].split("=");
		if (fieldval.length === 2 && fieldval[0].length > 0 && fieldval[1].length > 0) {
			createfields += fieldval[0] + "='" + fieldval[1] + "' ";
		}
		i += 1;
	}
	ret += "<$reveal state='" + tmp + "!!" + placeholder + "' type='nomatch' text=''>"
	ret += "<$button class='tc-btn-invisible'>";
	ret += "<$action-deletefield $tiddler='" + tmp + "' $field='" + placeholder + "'/>";
	ret += "{{$:/core/images/close-button}}";
	ret += "</$button>";
	ret += "<$list filter='[{" + tmp + "!!" + placeholder + "}!is[tiddler]]'>";
	ret += "<$button class='tc-btn-invisible'>";
	ret += "<$action-createtiddler $basetitle={{" + tmp + "!!" + placeholder + "}} tags='" + tags + "' " + createfields + "/>";
    if (keepafteradd === "no") {
		ret += "<$action-deletefield $tiddler='" + tmp + "' $field='" + placeholder + "'/>";
	}
	ret += "{{$:/core/images/new-button}}";
	ret += "</$button>";
	ret += "</$list>";
	ret += "<$list filter='[{" + tmp + "!!" + placeholder + "}is[tiddler]]'>";
	ret += "<$button to={{" + tmp + "!!" + placeholder +"}} class='tc-btn-invisible'>";
	ret += "{{$:/core/images/link}}";
	ret += "</$button>";
	ret += "</$list>";
	ret += "</$reveal>";
	return ret;
};

})();
