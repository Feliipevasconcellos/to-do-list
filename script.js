const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", themeToggle.checked);
  saveThemePreference();
});

function saveThemePreference() {
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
}

function loadThemePreference() {
  const savedtheme = localStorage.getItem("theme");

  if (savedtheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.checked = false;
  }
}
