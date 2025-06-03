let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("navbar-logo");
  const navbarLinks = document.getElementById("navbar-links");

  if (window.scrollY > 20) {
    // Navbar transparent, logo big and centered
    navbar.style.background = "transparent";
    logo.style.height = "350px";
    logo.style.margin = "0 auto";
    logo.style.display = "block";
    logo.style.position = "absolute";
    logo.style.left = "50%";
    logo.style.transform = "translateX(-60%)";

    // Hide links when scrolling down or up
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbarLinks.style.opacity = "0";
      navbarLinks.style.pointerEvents = "none";
    } else {
      // Scrolling up
      navbarLinks.style.opacity = "0";
      navbarLinks.style.pointerEvents = "none";
    }
  } else {
    // Navbar normal, logo small and left, show links
    navbar.style.background = "";
    logo.style.height = "40px";
    logo.style.margin = "";
    logo.style.display = "";
    logo.style.position = "";
    logo.style.left = "";
    logo.style.transform = "";
    navbarLinks.style.opacity = "1";
    navbarLinks.style.pointerEvents = "auto";
  }

  lastScrollY = window.scrollY;
});
