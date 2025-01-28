function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (e) {
      document.getElementById('display').value = 'Error';
    }
  }
  