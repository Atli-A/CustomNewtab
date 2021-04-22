

var interval = setInterval(updateAll, 100);
var d = new Date()
var x;
chrome.storage.sync.get(["is24"], function(items) { 
	 x = items["is24"]
})


chrome.storage.sync.get(["showClock"], function(items) { 
	if(!items["showClock"]) {
		document.getElementById("clock").classList.add("hide");
	}
})

let count = 0;
function updateAll() {
    d = new Date() // this code isn't great but it does work
	let hours  = d.getHours()
	if(!x) {
		hours = hours % 12;
	}
	console.log(hours)
    document.getElementById("clock").innerHTML = ('00' + hours).substr(-2) + ":" + ('00' + d.getMinutes()).substr(-2) + 
		"<span id='Seconds'>" + ":" + ('00' + d.getSeconds()).substr(-2) + "</span>"
        + "<span id='Milliseconds'>" + ":" + String(d.getMilliseconds()).substr(0, 1) + "</span>"


}

document.getElementById("replacementSearchBar").onkeypress = function (e) {
    if (!e) e = window.event;
    if (e.code == "Enter") {
        let x = document.getElementById("replacementSearchBar").value
        x = encodeURIComponent(x.trim())
        window.location.replace("https://www.google.com/search?q=" + x);
    }
}


chrome.storage.sync.get(["titleText"], function(items) {
	document.getElementById("Title").innerHTML = items["titleText"]
	console.log(items["titleText"])
})
