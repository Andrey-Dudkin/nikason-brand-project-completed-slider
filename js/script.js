// * burger menu
const burgerButton = document.querySelector(".burger_menu_button");
const burgerIcon = document.querySelector(".burger_menu_icon");
const menuMobile = document.querySelector(".nav_mobile_menu");

burgerButton.addEventListener("click", function(){
    burgerIcon.classList.toggle("burger_menu_icon_active")
    menuMobile.classList.toggle("open_menu")
})

// *slider
const sliderImages = document.querySelectorAll(".slider_image");
const buttonSliderPrev = document.querySelector(".button_prev");
const buttonSliderNext = document.querySelector(".button_next");
buttonSliderPrev.style.opacity = "0";
buttonSliderPrev.style.cursor = "auto";

sliderImages[0].classList.add("slider_image_active")
let currentSlide = 0;
buttonSliderPrev.addEventListener("click", function(){
    buttonSliderNext.style.opacity = "1";
    buttonSliderNext.style.cursor = "pointer"; 

    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].classList.remove("slider_image_active");
    }
    currentSlide --;
    if(currentSlide < 0 ){
        currentSlide = sliderImages.length-1 ;
    }else if(currentSlide === 0){
        buttonSliderPrev.style.opacity = "0";
        buttonSliderPrev.style.cursor = "auto"; 
    }
    sliderImages[currentSlide].classList.add("slider_image_active");
});

buttonSliderNext.addEventListener("click", function(){
    buttonSliderPrev.style.opacity = "1";
    buttonSliderPrev.style.cursor = "pointer"; 
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].classList.remove("slider_image_active");
    }
    currentSlide ++;
    if(currentSlide >= sliderImages.length){
        currentSlide = 0;
    }else if(currentSlide === 4){
        buttonSliderNext.style.opacity = "0";
        buttonSliderNext.style.cursor = "auto"; 

    }
    sliderImages[currentSlide].classList.add("slider_image_active");
});