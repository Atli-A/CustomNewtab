//generates link config
let links = []
let shorthands = []
for (let i = 0; i < 10; i++) {
	links.push("l" + i)
	shorthands.push("s" + i)
}
console.log("links = " + links)
console.log("shorthands = " + shorthands)

let shorthands_div = document.getElementById("shorthand")
let links_div = document.getElementById("links")
for (let i = 0; i < links.length; i++) {
	// shorthands_div.appendChild(document.createElement("input", {}));
	shorthands_div.innerHTML += '<input name="title" type="text"></input>'
}

titleVal = chrome.storage.sync.get(["titleText"], function(items) { // set value of input to what it already is
	document.getElementById("popupTitle").value = items["titleText"]
})



document.getElementById("popupTitle").onkeypress = function(e) { // for any keypress in the text thing
	if (e.key == "Enter") { // check if key is enter
		chrome.storage.sync.set({"titleText":document.getElementById("popupTitle").value}, function() {
			
		});
		window.close()
	}
}





