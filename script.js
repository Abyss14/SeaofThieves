$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        auto: true,
        
        infiniteLoop: true,
        controls:false,
        
        easing: "swing",
        speed: 1500,
        slideMargin: 300,
        nextText: '',
        prevText: '',
        
        
    });
});
$(document).ready(function () {
    $('.slider_2').bxSlider1({
        pagerCustom: '.slider-nav',
        auto: true,
        autoCotrols: false,
        infiniteLoop: true,
        controls:false,
        pause:3000,
        easing: "swing",
        speed: 1500,
        slideMargin: 300,
        nextText: '',
        prevText: '',
        
        
    });
});
