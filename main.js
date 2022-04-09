const humbergerMenu = document.getElementById("humberger-menu");
const xLogo = document.getElementById("x-logo");
const dropdownContainer = document.querySelector(".dropdown-container")


humbergerMenu.addEventListener("click", function () {
    humbergerMenu.style.display ="none"
    xLogo.style.display = "inline"
    dropdownContainer.style.display = "flex";
})

xLogo.addEventListener("click", function () {
    humbergerMenu.style.display ="inline-block"
    xLogo.style.display = "none"
    dropdownContainer.style.display = "none";
})