$(".menu-mobile-icon").click(function(){ // toggle the menu when clicking on mobile menu icon
    $(".menu-list").fadeToggle(800);

});

if (window.matchMedia("(max-width: 700px)").matches) { //  when the size is under 700 px apply the click toggling to the undermenu mmh
  
$(".mmh").click(function(){
    $(".under-menu-link").fadeToggle();
});
}

$(window).resize(function(){location.reload();}); // reload on resize


if (window.matchMedia("(max-width: 700px)").matches) { //  when the size is under 700 px apply the click toggling to the undermenu mmh
$(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
	$('.main-navbar').addClass('fixed');
	$('.main-navbar').parent().next().css("margin-top","57px");
	
    } else {
	$('.main-navbar').removeClass('fixed');
	$('.main-navbar').parent().next().css('margin-top',"0px");
    }
});}else{
    $(window).scroll(function () {
	if ($(window).scrollTop() > 100) {
	    $('.main-navbar').addClass('fixed');
	    $('.main-navbar').parent().next().css('margin-top',"50px");
	} else {
	    $('.main-navbar').removeClass('fixed');
	    $('.main-navbar').parent().next().css('margin-top',"0px");
	}
    });

}
