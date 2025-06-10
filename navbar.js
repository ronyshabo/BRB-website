// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", function () {
//   const navbar = document.getElementById("navbar");
//   const logo = document.getElementById("navbar-logo");
//   const navbarLinks = document.getElementById("navbar-links");

//   if (window.scrollY < 20) {
//     // At the top of the page
//     navbar.style.background = "";
//     logo.style.height = "100px";
//     logo.style.transform = "translateX(-60%)";
//     navbarLinks.style.opacity = "1";
//     navbarLinks.style.pointerEvents = "auto";
//   } else if (window.scrollY > lastScrollY) {
//     // Scrolling down
//     navbar.style.background = "transparent";
//     logo.style.height = "80px";
//     logo.style.transform = "translateX(-60%)";
//     navbarLinks.style.opacity = "0";
//     navbarLinks.style.pointerEvents = "none";
//   } else if (window.scrollY < lastScrollY) {
//     // Scrolling up
//     navbar.style.background = "";
//     logo.style.height = "100px";
//     logo.style.transform = "none";
//     navbarLinks.style.opacity = "1";
//     navbarLinks.style.pointerEvents = "auto";
//   }

//   lastScrollY = window.scrollY;
// });
