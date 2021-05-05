$(document).ready(function () {

    $("body").css("opacity", "1");

    $("#doc-Slider").owlCarousel({
        nav: false,
        dots: true,
        responsive: {
            1300: {
                items: 6,
                margin: 45
            },
            1200: {
                items: 5,
                margin: 38
            },
            992: {
                items: 4,
                margin: 33
            },
            768: {
                items: 3,
                margin: 25
            },
            576: {
                items: 2,
                margin: 25
            },
            0: {
                autoplay: true,
                items: 1
            }
        }
    })


    $('.burger').click(function () {
        $('.burger-line').toggleClass('active')
        $('.header-main .container .menu').toggleClass('active')
        $('.header-main .container .search-form').toggleClass('active')
        $('.header-main').toggleClass('active')
    })


})
