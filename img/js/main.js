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

            // Store every slides into a variable
            var slide1 = $('.slide1');
            var slide2 = $('.slide2');
            var slide3 = $('.slide3');

            var slideArray = [slide1, slide2, slide3];

            // Declare variables for Delay-loop Function
            var index = 0;
            var max = 3;

            alert("test");
            (function autoSlide() {
                // As it is an infinite recursive function, we set index back to 0 each time index = 3
                if (index >= max) {
                    index = 0;
                }

                setTimeout(function() {
                    // Display slideArray[picture] if not already active
                    if (slideArray[i].hasClass('active') === false) {
                        // Hide every other pictures
                        for (var j = 0; j < slideArray.length; j++) {
                            if (j != index) {
                                slideArray[j].removeClass('active');
                            }
                        }
                        // Display the picture
                        slideArray[index].addClass('active');
                    }
                    // Indent index
                    index++;
                    autoSlide();
                }, 2000);
            })();

            // autoSlide();

        }
