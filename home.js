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

//change lang-curr
let azn = document.querySelector('.home-azn');
let usd = document.querySelector('.home-usd');
let displayCurr = document.getElementById('displayCurr');
let currBlock = document.querySelector('.nav-currency');
let currList = document.getElementById('homeCurrList');
currBlock.addEventListener('click', () => {
    if (currList.style.display === 'none') {
        currList.style.display = 'block';
    } else {
        currList.style.display = 'none'
    }
});
const setCurr = () => {
    azn.addEventListener('click', () => {
        displayCurr.innerText = 'AZN';
    });
    usd.addEventListener('click', () => {
        displayCurr.innerText = 'USD';
    });
}
setCurr();

let aze = document.querySelector('.home-az');
let en = document.querySelector('.home-en');
let displayLang = document.getElementById('displayLang');
let langBlock = document.querySelector('.language');
let langList = document.getElementById('homeLangList');
langBlock.addEventListener('click', () => {
    if (langList.style.display === 'none') {
        langList.style.display = 'block';
    } else {
        langList.style.display = 'none';
    }
});
const setLang = () => {
    aze.addEventListener('click', () => {
        displayLang.innerText = 'Azərbaycan dili';
    });
    en.addEventListener('click', () => {
        displayLang.innerText = 'İngilis dili';
    });
}
setLang();

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