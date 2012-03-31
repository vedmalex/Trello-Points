var utils = new Object();

/*Flag used to warn user only once*/
utils.brokenArrow = false;

/* 
Inform user that the content and format of the page has changed and that the
extension is no more compatible with it.
*/
utils.alertBrokenAPI = function(message) {
	if (utils.brokenArrow) {
		throw new Error("Broken API");
	}
	utils.brokenArrow = true;
	utils.log("Please contact the author of the extension and send him the current log:");
	utils.log(message);
	alert("TrelloScrum can't handle that version of Trello. Please disable the extension.\nGo to: chrome://settings/extensions#\n\nLog: "+message);
	throw new Error("Broken API");
};

utils.log = function(category, message) {
	if (console && console.log) {
		if (typeof(message) == "string") {
			console.log(new Date()+" :: "+category+" :: "+message);
		} else {
			console.log(new Date()+" :: "+category);
			console.log(message);
		}
	}
};

utils.isNumber=function(text) {
	return !isNaN(Number(text));
};