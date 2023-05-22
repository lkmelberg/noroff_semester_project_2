export function toggleMenu() {
  const hamburger = document.querySelector("#navbarTogglerDemo02");
  if (hamburger.style.display == "block") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}
