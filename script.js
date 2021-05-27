function imgSlider(images) {
    document.querySelector('.starbucks').src=images;

}
function changeColor(color) {
    const circle=document.querySelector('.circle');
    const learnMore=document.querySelector('.learn-more');
    const span=document.querySelector('.span');
    circle.style.background=color;
    learnMore.style.background=color;
    span.style.color=color;
}
