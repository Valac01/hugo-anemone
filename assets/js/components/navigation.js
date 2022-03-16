console.log("from navigation.js");

const mobNav = document.querySelector(".mobnav");
const mobNavToggle = document.querySelector(".mobnav__toggle");

mobNavToggle.addEventListener("click", () => {
  const visibility = mobNav.getAttribute("data-visible");
  if (visibility === "false") {
    mobNav.setAttribute("data-visible", "true");
  } else {
    mobNav.setAttribute("data-visible", "false");
  }
});

// TODO: Detect any scroll if scroll is detected hide the mobile nav
