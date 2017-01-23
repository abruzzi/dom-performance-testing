var ele1 = document.querySelector("#ele1");
var ele2 = document.querySelector("#ele2");
var container = document.querySelector(".container");

for(x = 0; x < 10000; x++) {
	var div = document.createElement("div");
	div.innerText = "created-"+x;
	div.setAttribute("class", x % 2 === 0 ? "a" : "b");
	div.setAttribute("id", "id-created-"+x);
	container.insertBefore(div, ele2);
}

console.time('reflow-1');

for(y = 0; y < 10000; y++) {
	var n = document.querySelector("#id-created-"+y);
	n.setAttribute("class", n.getAttribute("class") === "a" ? "b" : "a");
	// n.offsetHeight;
}

console.timeEnd('reflow-1');

console.log("- - - - - - - - - - - - - - - -");

console.time('reflow-2');

for(z = 0; z < 10000; z++) {
	var m = document.querySelector("#id-created-"+z);
	m.setAttribute("class", m.getAttribute("class") === "a" ? "b" : "a");
	m.offsetHeight;
}

console.timeEnd('reflow-2');