const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll(".contact-course-cards i");
let isDragStart = false, prevPageX, prevScrollLeft;
arrowIcons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        console.log(icon);
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
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
    isDragStart = false;
}
carousel.addEventListener('mousemdown', dragStart)
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);