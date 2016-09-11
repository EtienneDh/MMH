/***************************** Responsive Nav Bar ******************************/

$(".menu-mobile-icon").click(function() { // toggle the menu when clicking on mobile menu icon
    $(".menu-list").fadeToggle(800);

});

if (window.matchMedia("(max-width: 700px)").matches) { //  when the size is under 700 px apply the click toggling to the undermenu mmh

    $(".mmh").click(function() {
        $(".under-menu-link").fadeToggle();
    });
}

// $(window).resize(function(){location.reload();}); // reload on resize

if (window.matchMedia("(max-width: 700px)").matches) { //  when the size is under 700 px apply the click toggling to the undermenu mmh
    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $('.main-navbar').addClass('fixed');
            $('.main-navbar').parent().next().css("margin-top", "57px");

        } else {
            $('.main-navbar').removeClass('fixed');
            $('.main-navbar').parent().next().css('margin-top', "0px");
        }
    });
} else {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.main-navbar').addClass('fixed');
            $('.main-navbar').parent().next().css('margin-top', "50px");
        } else {
            $('.main-navbar').removeClass('fixed');
            $('.main-navbar').parent().next().css('margin-top', "0px");
        }
    });

}

/***************************** /Responsive Nav Bar *****************************/

/********************************* Slider **************************************/


// Store every slides into an object
var slide1 = {
    image: $('.slide1'),
    text: $('.slide1-txt'),
    circle: $('.circle1')
};

var slide2 = {
    image: $('.slide2'),
    text: $('.slide2-txt'),
    circle: $('.circle2')
};

var slide3 = {
    image: $('.slide3'),
    text: $('.slide3-txt'),
    circle: $('.circle3')
};

var slideArray = [slide1, slide2, slide3];

// Declare variables for Delay-loop Function
index = 0;
var max = 3;
// Delay between each slides
delay = 6000;

function autoSlide() {
    // As it is an infinite recursive function, we set index back to 0 each time index = 3
    if (index >= max) {
        index = 0;
    }
    // Auto play function
    var slider = function() {
            // Display slideArray[picture] if not already active
            if (slideArray[index].image.hasClass('active') === false) {
                // Hide every other pictures & infos
                for (var j = 0; j < slideArray.length; j++) {
                    if (j != index && slideArray[j].image.hasClass('active')) {
                        hideSlide(j);
                    }
                }
                // Display the slide
                displaySlide(index);
            }
            // Indent index
            index++;
            autoSlide();
        }
        // We store setTimeout() into a var so we can clear interval and stop auto play
    timer = setTimeout(slider, delay);
}

autoSlide();

/* Display Functions */

function hideSlide(slide) {
    // Hide pictures
    slideArray[slide].image.fadeOut(0);
    slideArray[slide].image.removeClass('active');
    // Hide infos
    slideArray[slide].text.fadeOut(0);
    slideArray[slide].text.removeClass('active');
    // Remove circle background color
    slideArray[slide].circle.css('background-color', 'transparent');
}


function displaySlide(slide) {
    // Display the picture
    slideArray[slide].image.fadeIn(1000);
    slideArray[slide].image.addClass('active');
    // Display the infos
    slideArray[slide].text.fadeIn(1000);
    slideArray[slide].text.addClass('active');
    // Fill the circle background-color
    slideArray[slide].circle.css('background-color', '#bdbdbd');
}

/* /Display Functions */ 

/* Control Functions */

function changeImage(direction) {
    // Stop autoSlide
    clearTimeout(timer);
    // Get Active Slide
    for(var i = 0; i < slideArray.length; i++) {
      if(slideArray[i].image.hasClass('active')) {
        var activeSlide = i;
      }
    }
    hideSlide(activeSlide);
    // Show requested Slide
    if(direction === "next") {
      activeSlide === 2 ? displaySlide(0) : displaySlide(activeSlide + 1);
    } else {
      activeSlide === 0 ? displaySlide(2) : displaySlide(activeSlide - 1);
    }
    // Run autSlide
    autoSlide();
}


function pickASlide(arg) {
    // Stop autoSlide
    clearTimeout(timer);
    // Hide Slide
    for (var j = 0; j < slideArray.length; j++) {
        hideSlide(j);
    }
    displaySlide(arg);
    // Run autoSlide from new index;
    autoSlide();
}
