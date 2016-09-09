/***************************** Responsive Nav Bar ******************************/

$(".menu-mobile-icon").click(function() { // toggle the menu when clicking on mobile menu icon
    $(".menu-list").fadeToggle(800);

});

if (window.matchMedia("(max-width: 700px)").matches) { //  when the size is under 700 px apply the click toggling to the undermenu mmh

    $(".mmh").click(function() {
        $(".under-menu-link").fadeToggle();
    });
}

$(window).resize(function() {
    location.reload();
}); // reload on resize


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
delay = 5000;

function autoSlide() {
    // As it is an infinite recursive function, we set index back to 0 each time index = 3
    if (index >= max) {
        index = 0;
    }
    // The function use setTimeout to add a delay before calling itself
    setTimeout(function() {
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
        console.log(delay);
        index++;
        autoSlide();
    }, delay);
};

autoSlide();

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

function currentIndex(index) {
    var current;
    index === 0 ? current = 2 : current = index - 1;
    return current;
}

function delaySlider(temp) {
    delay = temp;
    setTimeout(function() {
        delay = 5000;
    }, temp);
}

/*

function test(arg) {
    // Set delay to 1 min to give user enough time to read

    var current = currentIndex(index);

    if (arg == (current + 1)) {
        hideSlide(current);
    } else {
        for (var j = 0; j < slideArray.length; j++) {
            if (j != index ) {
                hideSlide(j);
            }
        }
        displaySlide(arg);
    }
    delaySlider(30000);
}

*/
