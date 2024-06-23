const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', calculate);
  let value = button.getAttribute('data-input');

  function calculate() {
    switch (value) {
      case "AC" :
        screen.value = "";
        break;
      case "CE" :
        screen.value = screen.value.slice(0, -1);
        break;
      case "=" :
        try {
          screen.value = eval(screen.value.replace("%", "/100"));
        } catch (error) {
          screen.value = "Error!"
        }
        break;
      default :
        screen.value += value;
    }
  }
});