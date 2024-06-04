function darkModeToggle() {
  const toggle = document.getElementById("dark-mode-toggle");

  toggle.addEventListener("change", (event) => {
    const html = document.documentElement;
    console.log(html);
    if (event.target.checked) {
      html.classList.add("dark"); // Add the dark mode class
    } else {
      html.classList.remove("dark"); // Remove the dark mode class
    }
  });
}

// darkModeToggle();

