console.log("from navigation.ts");

const mobNav = document.querySelector(".mobnav") as HTMLDivElement;
const mobNavToggle = document.querySelector(".mobnav__toggle") as HTMLDivElement;
const content = document.querySelector("#content") as HTMLDivElement;

const overlayClass : string = "mobnav--overlay";

mobNavToggle.addEventListener("click", () => {
  const visibility = mobNav.getAttribute("data-visible");
  if (visibility === "false") {
    mobNav.setAttribute("data-visible", "true");
    content.classList.add(overlayClass);
  } else {
    mobNav.setAttribute("data-visible", "false");
    content.classList.remove(overlayClass)
  }
});

// To detect click out side of the slide menu

content.addEventListener("click", (event: Event) => {
  event.stopPropagation()
  const visibility = mobNav.getAttribute("data-visible");
  if (visibility === "true") {
    mobNav.setAttribute("data-visible", "false");
    content.classList.remove(overlayClass)
  }
})

// Detect any scroll if scroll is detected hide the mobile nav

window.addEventListener("scroll", (event: Event) => {
  event.stopPropagation()
  const visibility = mobNav.getAttribute("data-visible");
  if (visibility === "true") {
    mobNav.setAttribute("data-visible", "false");
    content.classList.remove(overlayClass)
  }
})