
chrome.storage.sync.set({"titleText":"default text!"}, function() {
	
});


titleVal = chrome.storage.sync.get(["titleText"], function(items) {
	console.log(items["titleText"])
})

