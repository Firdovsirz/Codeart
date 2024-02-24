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

//change currency
let currChangeButton = document.querySelector('.contact-nav-currency');
let currList = document.getElementById('currList');
currChangeButton.addEventListener('click', () => {
    if (currList.style.display === "none") {
        currList.style.display = 'block';
    } else {
        currList.style.display = 'none';
    }
});
let langChangeButton = document.querySelector('.language');
let langList = document.getElementById('langList');
langChangeButton.addEventListener('click', () => {
    if (langList.style.display === "none") {
        langList.style.display = 'block';
    } else {
        langList.style.display = "none";
    }
});
let changeToAzn = document.querySelector('.azn');
let changeToUsd = document.querySelector('.usd');
let displayCurr = document.getElementById('displayCurr');
const setCurr = () => {
    changeToAzn.addEventListener('click', () => {
        displayCurr.innerHTML = 'AZN';
    });
    changeToUsd.addEventListener('click', () => {
        displayCurr.innerText = 'USD';
    })
}
setCurr();
let changeToAze = document.querySelector('.aze');
let changeToEn = document.querySelector('.en');
let displayLang = document.getElementById('displayLang');
const setLang = () => {
    changeToAze.addEventListener('click', () => {
        displayLang.innerHTML = 'Azərbaycan dili';
    });
    changeToEn.addEventListener('click', () => {
        displayLang.innerHTML = 'İngilis dili';
    });
}
setLang();