const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Handle clear
clearBtn.addEventListener('click', () => {
  currentInput = "";
  display.value = "";
});

// Handle equals
equalsBtn.addEventListener('click', () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  } else if (e.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === 'Escape') {
    currentInput = "";
    display.value = "";
  }
});