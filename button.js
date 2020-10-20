function upf() {
	focusRect.y -= 10; 
	if (focusRect.y < 0) {
		focusRect.y = 0;
	}
	console.log(focusRect.y);
}
function leftf() {
	focusRect.x -= 10; 
	if (focusRect.x < 0) {
		focusRect.x = 0;
	}
	console.log(focusRect.x);
}
function resetf() {
	focusRect.x = 130;
	focusRect.y = 100;
	focusRect.xWidth = 230;
	focusRect.yHeight = 230;
}
function rightf() {
	focusRect.x += 10; 
	if (focusRect.x > 200) {
		focusRect.x = 200;
	}
	console.log(focusRect.x);
}
function downf() {
	focusRect.y += 10; 
	if (focusRect.y > 200) {
		focusRect.y = 200;
	}
	console.log(focusRect.y);
}