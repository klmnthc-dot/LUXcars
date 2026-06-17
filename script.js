// nav shadow effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    nav.style.background =
        window.scrollY > 50
        ? "rgba(255,255,255,0.15)"
        : "rgba(255,255,255,0.08)";
});
