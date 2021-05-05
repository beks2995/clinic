$(document).ready(function() {

    $("body").css("opacity", "1");

    $('.burger').click(function () {
        $('.burger-line').toggleClass('active')
        $('.header-main .container .menu').toggleClass('active')
        $('.header-main .container .search-form').toggleClass('active')
        $('.header-main').toggleClass('active')
    })

})
