const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("clicked"));
    button.classList.add("clicked");
  });
});

function downloadPDF(url) {
  window.location.href = url;
  document.activeElement.blur();
}
