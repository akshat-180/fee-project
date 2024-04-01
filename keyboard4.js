document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.textarea textarea');
    const keyboardButtons = document.querySelectorAll('.keyboard button');
    let capsLock = false;

    keyboardButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.innerText;

            switch (buttonText) {
                case 'Backspace':
                    textarea.value = textarea.value.slice(0, -1);
                    break;
                case 'Enter':
                    textarea.value += '\n';
                    break;
                case 'Tab':
                    textarea.value += '\t';
                    break;
                case 'Caps':
                    capsLock = !capsLock;
                    toggleCapsLock();
                    break;
                case 'Shift':
                    // Toggle shift key (change the case of the letters)
                    break;
                case 'Space':
                    textarea.value += ' ';
                    break;
                default:
                    if (capsLock) {
                        textarea.value += buttonText.toUpperCase();
                    } else {
                        textarea.value += buttonText.toLowerCase();
                    }
                    break;
            }
        });
    });

    function toggleCapsLock() {
        const letterButtons = document.querySelectorAll('.keyboard .btn');
        letterButtons.forEach(button => {
            if (capsLock) {
                button.textContent = button.textContent.toUpperCase();
            } else {
                button.textContent = button.textContent.toLowerCase();
            }
        });
    }
});