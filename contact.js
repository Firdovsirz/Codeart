const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll(".contact-course-cards i");
let isDragStart = false, prevPageX, prevScrollLeft;
let firstCard = document.querySelectorAll('div')[0];
let firstCardWidth = firstCard.clientWidth + 5;
arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
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
    // carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
    isDragStart = false;
    // carousel.classList.remove("dragging");
}
carousel.addEventListener('mousemdown', dragStart)
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);


// toggle-menu
let openMenu = document.getElementById('menuBar');
let menu = document.querySelector('.menu');
let closeMenu = document.getElementById('closeMenu');
openMenu.addEventListener("click", () => {
    menu.style.display = 'block';
});

closeMenu.addEventListener("click", () => {
    menu.style.display = 'none';
    openMenu.style.display = 'flex';
});

//change language
let langBlock = document.querySelector('.change-lang');
let changeIcon = document.getElementById('changeIcon');
let changeToAz = document.getElementById('changeToAz');
let changeToEn = document.getElementById('changeToEn');
let langDisplay = document.getElementById('langDisplay');
changeIcon.addEventListener('click', () => {
    if(langBlock.style.display === 'none'){
        langBlock.style.display = 'block';
    } else {
        langBlock.style.display = 'none';
    }
});
changeToAz.addEventListener('click', ()=>{
    langDisplay.innerText = 'Az';
});
changeToEn.addEventListener('click', ()=>{
    langDisplay.innerText = 'En';
});