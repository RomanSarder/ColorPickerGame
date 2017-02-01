var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var easybtn = document.querySelector('#easy');
var hardbtn = document.querySelector('#hard');

easybtn.addEventListener('click', function() {
	h1.style['background-color'] = "steelblue";
	easybtn.classList.add('selected');
	hardbtn.classList.remove('selected');
	numSquares = 3;
	colors = generateColors(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for(var i = 0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardbtn.addEventListener('click', function() {
	h1.style['background-color'] = "steelblue";
	hardbtn.classList.add('selected');
	easybtn.classList.remove('selected');
	numSquares = 6;
	colors = generateColors(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for(var i = 0; i<squares.length; i++) {
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}
});
reset.addEventListener('click', function() {
	message.textContent = "";
	reset.textContent = "New Colors";
	colors = generateColors(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style['background-color'] = "steelblue";
})
colorDisplay.textContent = picked;

for (var i = 0; i<squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', function() {
		var clicked = this.style['background-color'];
		if(clicked === picked) {
			reset.textContent = "Play again?";
			message.textContent = "Correct!";
			changeColors(clicked);
			h1.style.background = clicked;
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
	var arr = [];
	for(var i = 0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

