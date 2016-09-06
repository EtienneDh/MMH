$(".menu-mobile-icon").click(function(){ // toggle the menu when clicking on mobile menu icon
    $(".menu-list").fadeToggle(800);

});

if (window.matchMedia("(max-width: 700px)").matches) { //  when the size is under 700 px apply the click toggling to the undermenu mmh
  
$(".mmh").click(function(){
    $(".under-menu-link").fadeToggle();
});
}

$(window).resize(function(){location.reload();});
