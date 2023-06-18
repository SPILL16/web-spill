const navBar = document.getElementById("main-nav");
const navBarInner = document.querySelector(".navbar")

if (window.scrollY == 0) {
    navBar.style.background = "transparent";
} else {
    navBar.style.background = "var(--bg-color-nav)";
}

window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        navBar.style.background = "transparent";
        navBar.style.height = "10px"
        navBarInner.style.height = "var(--nav-height)";
    } else {
        navBar.style.background = "var(--bg-color-nav)";
        navBar.style.height = "var(--nav-height-smol)"
        navBarInner.style.height = "var(--nav-height-smol)";
    }
})