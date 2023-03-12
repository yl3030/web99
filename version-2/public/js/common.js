$(".header_search_btn").click(function(){
    if($(window).width() >= 992) {
        $(this).parents(".header_search").addClass("search");
        $(".header_nav").addClass("search");
    }
})

$(".header_search_close").click(function(){
    if($(window).width() >= 992) {
        $(this).parents(".header_search").removeClass("search");
        $(".header_nav").removeClass("search");
    }
})



$(".header_nav_main>li.drop").click(function(){
    if($(this).hasClass("dropdown")) {
        $(this).removeClass("dropdown");
        $(this).find(".header_nav_second").slideUp(500);
    }else {
        $(this).addClass("dropdown");
        $(this).find(".header_nav_second").slideDown(500);
        $(this).siblings("li.drop").removeClass("dropdown");
        $(this).siblings("li.drop").find(".header_nav_second").slideUp(500);
    }
})