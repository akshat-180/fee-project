document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.textarea textarea');
    const buttons = document.querySelectorAll('.row button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        handleButtonClick(this.innerText);
      });
    });
  
    function handleButtonClick(value) {
      switch (value) {
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
          // Toggle Caps Lock state (for demonstration purposes)
          alert('Caps Lock Toggled');
          break;
        case 'Shift':
          // Toggle Shift state (for demonstration purposes)
          alert('Shift Toggled');
          break;
        case 'Ctrl':
        case 'Win':
        case 'Alt':
          // Handle Ctrl, Win, Alt keys as needed
          alert(value + ' key pressed');
          break;
        case 'Space':
          textarea.value += ' ';
          break;
        default:
          textarea.value += value;
          
            }
          }
  });