const html = document.documentElement;
const toggleSwitch = document.querySelector("#theme-toggle");

function handleThemeChange(event) {
  const isDark = toggleSwitch.checked;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark);
}

function getSavedTheme() {
  // 1. hent det gemte theme
  const isDark = localStorage.getItem("isDarkMode") === "true";
  // 2. sync dark-klassen på html
  html.classList.toggle("dark", isDark);
  // 3. sync checkboxens checked-state
  toggleSwitch.checked = isDark;
}

getSavedTheme();
toggleSwitch?.addEventListener("change", handleThemeChange);
