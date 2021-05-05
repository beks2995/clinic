$(document).ready(function() {

    $("body").css("opacity", "1");

    $(".add-event").click(function () {
        $(".callback-overlay").addClass('active');
        $("main").addClass('active');
        $(".header").addClass('active');
        $(".footer").addClass('active');
    })

    $(".callback-onlineRec-close").click(function () {
        $(".callback-overlay").removeClass('active');
        $("main").removeClass('active');
        $(".header").removeClass('active');
        $(".footer").removeClass('active');
    })

    $(".appointmentBtn-js").click(function () {
        $(".callback-checkedMsg").addClass('active');
    })
    $(".callback-checkedMsg-close").click(function () {
        $(".callback-checkedMsg").removeClass('active');
        $(".callback-overlay").removeClass('active');
        $("main").removeClass('active');
        $(".header").removeClass('active');
        $(".footer").removeClass('active');
    })

    $('.callback-popup').submit(function (e) {
        var form = this;
        e.preventDefault();
        setTimeout(function () {
            form.submit();
        }, 4000); // in milliseconds
    });

    $('.burger').click(function () {
        $('.burger-line').toggleClass('active')
        $('.header-main .container .menu').toggleClass('active')
        $('.header-main .container .search-form').toggleClass('active')
        $('.header-main').toggleClass('active')
    })

})
