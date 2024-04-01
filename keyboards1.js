document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.querySelector('.text');

    // Function to handle key press events
    function handleKeyPress(event) {
        const keyPressed = event.target.textContent;

        // Append the pressed key to the text input
        textInput.value += keyPressed;
    }

    // Get all elements with the class "keys"
    const keys = document.querySelectorAll('.keys');

    // Add event listeners for each key
    keys.forEach(key => {
        key.addEventListener('click', handleKeyPress);
    });

    // Additional functionalities (like handling special keys - Backspace, Enter, etc.) can be added similarly.

    // Example function for handling Backspace key
    const backspaceKey = document.querySelector('.backspace_key');
    backspaceKey.addEventListener('click', function () {
        textInput.value = textInput.value.slice(0, -1); // Remove the last character from the text input
    });

    // You can add similar event listeners for other keys to perform various functions.
});
