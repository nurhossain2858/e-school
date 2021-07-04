$(document).ready(function(){
    // nav toggler start
    $(".header .nav-toggler").click(function(){
        $(".header .nav").slideToggle();
        $(".header .nav-toggler").toggleClass("open");
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
            $(".nav-toggler").toggleClass("open");
        }
    })
    // nav toggler end
})