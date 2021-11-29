const slideCointer = document.querySelector(".slider-containter")
const slideLeft = document.querySelector(".left-slide")
const slideRight = document.querySelector(".right-slide")
const downBottom = document.querySelector(".down-button")
const upButtom = document.querySelector(".up-button")
const slidesLenth = slideRight.querySelectorAll("div").length


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLenth - 1) * 100}vh`

upButtom.addEventListener('click', () => changeSlide('up'));
downBottom.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = slideCointer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLenth - 1) {
            activeSlideIndex = 0;
        }
    }else if(direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLenth - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}
