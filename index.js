
function next() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider__content');
    sliderContent.scrollLeft += widthSlider;
    if (sliderContent.scrollLeft >= sliderContent.scrollWidth - widthSlider) {
        sliderContent.scrollLeft = 0;
    }


}


function previous() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    document.querySelector('.slider__content').scrollLeft -= widthSlider;
    sliderContent.scrollLeft -= widthSlider;
    if (sliderContent.scrollLeft <= 0) {
        sliderContent.scrollLeft = sliderContent.scrollWidth - widthSlider;
    }

}
