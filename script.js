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

//Animation for menubar toggeing
function menubarToggleing() {
  var tl = gsap.timeline();
  tl.to("#mobileNav", {
    left: 0,
    duration: 1,
  });
  tl.from("#items li", {
    opacity: 0,
    x: 150,
    duration: 0.4,
    stagger: 0.3,
  });
  tl.pause();

  const menuIcon = document.getElementById("menu");
  menuIcon.addEventListener("click", () => {
    tl.play();
  });

  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    tl.reverse();
  });
}
menubarToggleing();

function headerAnimation() {
  var tl = gsap.timeline();
  tl.from("#navber", {
    x: -100,
    duration: 1,
  });
}
headerAnimation();

function Animation(){
  const tl = 

}
Animation()
