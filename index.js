window.onload = function () {
	var modal = document.getElementById("modal");
	modal.style.display = "block";

	var modalText = document.getElementById("modalText");
	let hr = new Date().getHours();
	if (hr < 12) modalText.innerHTML = "Good Morning, Guest!";
	else if (hr < 18) modalText.innerHTML = "Good Afternoon, Guest!";
	else modalText.innerHTML = "Good Evening, Guest!";

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function () {
		modal.style.display = "none";
	};

	setTimeout(function () {
		modal.style.display = "none";
	}, 10000);
};

function checkHexCode(e) {
	if (/^#([0-9A-F]{3}){1,2}$/i.test(e.target.value)) {
		document.body.style.backgroundColor = e.target.value;
	} else {
		console.log("NOT HEX");
	}
}

function navbar() {
	var x = document.getElementById("nav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}
