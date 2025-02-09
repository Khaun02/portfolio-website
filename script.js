// targetting the 2 elements and whenever we click it, it will either add or remove the class in that element and that "open" class is going to have some styling
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}