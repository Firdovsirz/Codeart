let carousel = document.querySelector('.carousel');
let isDragging = false, startX, startScrollLeft;
const arrowBtns = document.querySelectorAll('.contact-course-cards i');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
arrowBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    });
})
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
}
const infiniteScroll = ()=>{
    if(carousel.scrollLeft === 0){
        carousel.scrollLeft = carousel.scrollWidth - (2*carousel.offsetWidth);
        console.log('u reach right end');
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.scrollLeft = carousel.offsetWidth;
        console.log('u reach left end');
    }
}
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);