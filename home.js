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



// carousel