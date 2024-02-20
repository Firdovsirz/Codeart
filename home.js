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
//change language
let displayLang = document.getElementById('displayLang');
let changeIcon = document.getElementById('changeLangIcon');
let closeIcon = document.getElementById('closeLang');
let langBlock = document.querySelector('.lang-change');
let changeAz = document.getElementById('changeToAz');
let changeEn = document.getElementById('changeToEn');
changeIcon.addEventListener('click', () => {
    if (langBlock.style.display === 'none') {
        langBlock.style.display = 'block';
        changeIcon.style.transform = 'rotate(180deg)';
    } else {
        langBlock.style.display = 'none';
        changeIcon.style.transform = 'rotate(0deg)';
    }
});
changeAz.addEventListener('click', () => {
    displayLang.innerText = 'Az';
    langBlock.style.display = 'none';
});
changeEn.addEventListener('click', () => {
    displayLang.innerText = 'En';
    langBlock.style.display = 'none';
});
//carousel
const carousel = document.querySelector('.carousel'),
    firstCard = document.querySelectorAll('.card')[0];
arrowIcons = document.querySelectorAll('.wrapper i');
let isDragStart = false, prevPageX, prevScrollLeft;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        let firstCardWidth = firstCard.clientWidth + 20;
        carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
        setTimeout(() => showHideIcons(), 60);
    })
})
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragStart) return;
    carousel.scrollLeft = e.pageX;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = (e) => {
    isDragStart = false;
    carousel.classList.remove("dragging")
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseleave", dragStop);
