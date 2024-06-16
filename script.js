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
    x: -200,
    duration: 1.5,
  });
}
headerAnimation();

function bannerAnimation() {
  // var tl = gsap.timeline();
  // gsap.from("#banner_left", {
  //   x: -100,
  //   duration: 1,
  // });

  gsap.from("#banner_right", {
    opacity: 0,
    x: 300,
    duration: 1.5,
  });
}
bannerAnimation();

function qualityService() {
  var tl = gsap.timeline();
  tl.from("#Quality_service .quality_item", {
    opacity: 0,
    x: 200,
    duration: 1,
    stagger: {
      each: 0.3,
      from: "start",
    },
    // scrollTrigger: {
    //   trigger: ".quality_item ",
    //   scroller: "body",
    //   markers: true,
    //   start: "top 75%",
    //   end: "top 10%",
    //   scrub: true,
    // },
  });
}
qualityService();
