// Dark mode is the default. The button switches between dark and light.
const themeButton = document.getElementById("theme-toggle");

// When the page loads, use the theme saved last time
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}
updateButtonText();

// Switch the theme and remember the choice
function toggleTheme() {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  updateButtonText();
}

// Show the name of the mode the button will switch to
function updateButtonText() {
  if (document.body.classList.contains("light")) {
    themeButton.textContent = "Dark mode";
  } else {
    themeButton.textContent = "Light mode";
  }
}

themeButton.addEventListener("click", toggleTheme);
