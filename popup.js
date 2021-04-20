
titleVal = chrome.storage.sync.get(["titleText"], function(items) { // set value of input to what it already is
	document.getElementById("popupTitle").value = items["titleText"]
})



document.getElementById("popupTitle").onkeypress = function(e) { // for any keypress in the text thing
	if (e.key == "Enter") { // check if key is enter
		chrome.storage.sync.set({"titleText":document.getElementById("popupTitle").value}, function() {
			
		});
	}
}





