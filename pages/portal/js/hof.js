$("div.hof-text-show-more").on("click", function() {
    $('img', this).toggleClass('lk-arrow-down')
    $('img', this).toggleClass('lk-arrow-up')
    if ($('img', this).hasClass("lk-arrow-down")) {
        $(this).parents().children(".hof-text").css("max-height", "105px");
        $('a', this).text("Показать больше");
    } else {
        $(this).parents().children(".hof-text").css("max-height", "1000px")
        $('a', this).text("Свернуть");
    }
});
