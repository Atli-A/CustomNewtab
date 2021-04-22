//generates link config
let links = []
let shorthands = []



//this area defines the stuff being taken from storage
chrome.storage.sync.get(["titleText"], function(items) { // set value of input to what it already is
	document.getElementById("popupTitle").value = items["titleText"]
})
//for 24 hour 
chrome.storage.sync.get(["is24"], function(items) { // set value of input to storage
	if (items["is24"] == null || items["is24"] == undefined) {
		chrome.storage.sync.set({"is24":true}, function() { });
	}
	document.getElementById("24-hour").checked = items["is24"]
})
//for showing clock
chrome.storage.sync.get(["showClock"], function(items) { // set value of input to storage
	if (items["showClock"] == null || items["showClock"] == undefined) {
		chrome.storage.sync.set({"showClock":true}, function() { });
	}
	document.getElementById("show-clock").checked = items["showClock"]
})




// for dealing wiht updating the page almost live
function updatePage() {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (tabs[0].title == "New Tab") {
				chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
				console.log("trying to reload")
		}
		console.log(tabs[0].title)
	});
}

//updating 24h checkboxe
document.getElementById("24-hour").onchange = function() {
	let isChecked = document.getElementById("24-hour").checked;
	chrome.storage.sync.set({"is24":isChecked}, function() { });
	updatePage();
}

//updating show clock checkboxe
document.getElementById("show-clock").onchange = function() {
	let isChecked = document.getElementById("show-clock").checked;
	chrome.storage.sync.set({"showClock":isChecked}, function() { });
	console.log("test")
	updatePage();
}
	

//for dealing with the links and stuff
for (let i = 0; i < 10; i++) {
	links.push("l" + i)
	shorthands.push("s" + i)
}

let shorthands_div = document.getElementById("shorthand")
let links_div = document.getElementById("links")


for (let i = 0; i < links.length; i++) {
	// shorthands_div.appendChild(document.createElement("input", {}));
	shorthands_div.innerHTML +="label" + i + ' <input name="title" type="text"></input>'
	links_div.innerHTML +="link" + i + ' <input name="'+ "link" + '" class="wide" type="text"></input>'
}


document.getElementById("popupTitle").onkeypress = function(e) { // for any keypress in the text thing
	if (e.key == "Enter") { // check if key is enter
		chrome.storage.sync.set({"titleText":document.getElementById("popupTitle").value}, function() {
			
		});
		updatePage()
		window.close()
	}
}



chrome.storage.sync.set({"showClock":true}, function() { });




