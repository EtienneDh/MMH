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

$(document).ready(function() {

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
            var index = 0;
            var max = 3;

            (function autoSlide() {
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
                                // Hide pictures
                                slideArray[j].image.fadeOut(0);
                                slideArray[j].image.removeClass('active');
                                // Hide infos
                                slideArray[j].text.fadeOut(0);
                                slideArray[j].text.removeClass('active');
                                // Remove circle background color
                                slideArray[j].circle.css('background-color', 'transparent'); 
                            }
                        }
                        // Display the picture
                        slideArray[index].image.fadeIn(1000);
                        slideArray[index].image.addClass('active');
                        // Display the infos
                        slideArray[index].text.fadeIn(1000);
                        slideArray[index].text.addClass('active');
                        // Fill the circle background-color
                        slideArray[index].circle.css('background-color', '#bdbdbd');
                    }
                    // Indent index
                    index++;
                    autoSlide();
                }, 10000);
            })();

});
