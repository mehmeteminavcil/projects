let screen = document.querySelector(".screen");
let screenSmall = document.querySelector(".screen-small");
let buttons = Array.from(document.getElementsByClassName("button"));
const themeBtn = document.getElementById("theme-btn");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "←":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }

        break;
      case "=":
        try {
          screenSmall.innerText = screen.innerText;
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error!";
        }
        break;

      default:
        screen.innerText += e.target.innerText;
    }
  });
});

themeBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
});
