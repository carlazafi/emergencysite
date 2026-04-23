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

const form = document.querySelector("#webform");
const summary = document.querySelector("#form-summary article");

// slider live update
document.querySelector("#slider").addEventListener("input", function () {
  document.querySelector("#slider-value").textContent = this.value;
});

// submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const foodtype =
    document.querySelector('input[name="foodtype"]:checked')?.value ||
    "Ikke valgt";

  const budget = document.querySelector("#slider").value;
  const madvare = document.querySelector("#madvare").value || "Ikke angivet";

  const personer =
    [...document.querySelectorAll('input[type="checkbox"]:checked')]
      .map((el) => el.value)
      .join(", ") || "Ingen valgt";

  summary.innerHTML = `
    
    <p><strong>Måltid:</strong> ${foodtype}</p>
    <p><strong>Budget:</strong> ${budget} kr</p>
    <p><strong>Madvarer:</strong> ${madvare}</p>
    <p><strong>Personer:</strong> ${personer}</p>
  `;
});
