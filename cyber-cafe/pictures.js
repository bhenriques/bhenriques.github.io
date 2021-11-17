
// make variables for page elements
const bakerySlides = document.getElementsByClassName('bakery-slides');
const bakeryDots = document.getElementsByClassName('bakery-dots');
const eventSlides = document.getElementsByClassName('event-slides');
const eventDots = document.getElementsByClassName('event-dots');
const customerSlides = document.getElementsByClassName('customer-slides');
const customerDots = document.getElementsByClassName('customer-dots');

// set variables needed for function
var bakerySlideNum = 0;
var eventSlideNum = 0;
var customerSlideNum = 0;

// slideshow function
document.body.onload = function slideShow() {

    // automate bakery slides and dots
    for(var b = 0; b < bakerySlides.length; b++) {
        bakerySlides[b].style.display = 'none';
        bakeryDots[b].style.backgroundColor = '#bcbcbc'
    }
    bakerySlideNum++;
    bakerySlides[bakerySlideNum - 1].style.display = 'block';
    bakeryDots[bakerySlideNum - 1].style.backgroundColor = '#8CFF94';

    // automate event slides and dots
    for(var e = 0; e < eventSlides.length; e++) {
        eventSlides[e].style.display = 'none';
        eventDots[e].style.backgroundColor = '#bcbcbc';
    }
    eventSlideNum++;
    eventSlides[eventSlideNum - 1].style.display = 'block';
    eventDots[eventSlideNum - 1].style.backgroundColor = '#8CFF94';

    // automate customer slides and dots
    for(var c = 0; c < customerSlides.length; c++) {
        customerSlides[c].style.display = 'none';
        customerDots[c].style.backgroundColor = '#bcbcbc';
    }
    customerSlideNum++;
    customerSlides[customerSlideNum - 1].style.display = 'block';
    customerDots[customerSlideNum - 1].style.backgroundColor = '#8CFF94';

    // reset slide counters
    if (bakerySlideNum >= bakerySlides.length) {
        bakerySlideNum = 0;
    }
    if (eventSlideNum >= eventSlides.length) {
        eventSlideNum = 0;
    }
    if (customerSlideNum >= customerSlides.length) {
        customerSlideNum = 0;
    }

    setTimeout(slideShow, 3000);
};