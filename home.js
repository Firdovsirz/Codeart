let openMenu = document.getElementById('menuBar');
let menu = document.querySelector('.home-menu');
let closeMenu = document.getElementById('homeCloseMenu');
openMenu.addEventListener("click", () => {
    menu.style.display = 'block';
});

closeMenu.addEventListener("click", () => {
    menu.style.display = 'none';
    openMenu.style.display = 'flex';
});