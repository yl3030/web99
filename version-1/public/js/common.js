$(".menu-title.drop").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).parents(".item").find("ul").slideUp(300);
    }else {
        $(this).addClass("active");
        $(this).parents(".item").find("ul").slideDown(300);
        $(this).parents(".item").siblings(".item").find(".menu-title").removeClass("active");
        $(this).parents(".item").siblings(".item").find("ul").slideUp(300);
    }
})

$(".menu-icon").click(function(){
    $(".menu").addClass("active");
})

$(".menu_cross").click(function(){
    $(".menu").removeClass("active");
})
$(document).click(function (event) {
    var menuArea = $(".menu");
    var headerArea = $(".header");
    if (!menuArea.is(event.target) && menuArea.has(event.target).length === 0) {
        if (!headerArea.is(event.target) && headerArea.has(event.target).length === 0) {
            $(".menu").removeClass("active");
        }
    }
});