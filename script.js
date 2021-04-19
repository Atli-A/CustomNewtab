

var interval = setInterval(updateAll, 100);
var d = new Date()
let count = 0;
function updateAll() {
    d = new Date() // this code isn't great but it does work
    document.getElementById("clock").innerHTML = ('00' + d.getHours()).substr(-2) + ":" + ('00' + d.getMinutes()).substr(-2) + "<span id='Seconds'>" + ":" + ('00' + d.getSeconds()).substr(-2) + "</span>"
        + "<span id='Milliseconds'>" + ":" + String(d.getMilliseconds()).substr(0, 1) + "</span>"


let y = document.title;
    switch(count % 8) {
	case 0:
	    y = "|"
	case 1:
	    y = "/"
	case 2:
	    y = "-"
	case 3:
	    y = "\\"
	case 4:
	    y = "|"
	case 5:
	    y = "/"
	case 6:
	    y = "-"
	case 7:
	    y = "\\"
     }
}

document.getElementById("replacementSearchBar").onkeypress = function (e) {
    if (!e) e = window.event;
    if (e.code == "Enter") {
        let x = document.getElementById("replacementSearchBar").value
        x = encodeURIComponent(x.trim())
        window.location.replace("https://www.google.com/search?q=" + x);
    }
}



