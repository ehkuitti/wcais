function setKeyboard(keysValues) {
	// Get the piano keyboard div using its id
	let buttons = document.querySelectorAll("#piano-keyboard button");
	
	for (var i = 0; i < buttons.length(); i++)
    {
        buttons[i].textContent(keysValues[i]);
    }	
	return keyboard;
}