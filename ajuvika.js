// JavaScript - FINALKEYBOARD.JS

// Night Mode Toggle
const nightModeToggle = document.querySelector('.night_mode');
const toggleCircle = document.querySelector('.toggle_circle');
const body = document.body;

nightModeToggle.addEventListener('click', () => {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
});

// Key Press Handling
const keys = document.querySelectorAll('.keys');
const textInput = document.querySelector('.text');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent.trim();

        // Handling special keys
        switch (keyValue) {
            case 'Backspace':
                textInput.value = textInput.value.slice(0, -1);
                break;
            case 'Enter':
                textInput.value += '\n';
                break;
            case 'Space':
                textInput.value += '   ';
                break;
            default:
                const isCapsLock = document.querySelector('.caps_lock_key').classList.contains('active');
                if (isCapsLock) {
                    textInput.value += keyValue.toUpperCase();
                } else {
                    textInput.value += keyValue.toLowerCase();
                }
        }

        key.classList.add('remove');
        setTimeout(() => {
            key.classList.remove('remove');
        }, 100);
    });
});