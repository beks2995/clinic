$(document).ready(function () {

    $("body").css("opacity", "1");

    //home slider
    $("#home-slider").owlCarousel({
        items: 1
    });

    $("#specialist-slider").owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        responsive: {
            992: {
                items: 4
            },
            768:{
                items: 3
            },
            576:{
                items: 2
            },
            0:{
                items: 1
            }
        }
    });

    var start = new Date(),
        prevDay,
        startHours = 9;

// 09:00
    start.setHours(9);
    start.setMinutes(0);

// Если сегодня суббота или воскресенье - 10:00
    if ([6, 0].indexOf(start.getDay()) != -1) {
        start.setHours(10);
        startHours = 10
    }

    $('#timepicker-actions').datepicker({
        autoClose: true,
        timepicker: true,
        startDate: start,
        minHours: startHours,
        maxHours: 18,
        onSelect: function (fd, d, picker) {
            // Ничего не делаем если выделение было снято
            if (!d) return;

            var day = d.getDay();

            // Обновляем состояние календаря только если была изменена дата
            if (prevDay != undefined && prevDay == day) return;
            prevDay = day;

            // Если выбранный день суббота или воскресенье, то устанавливаем
            // часы для выходных, в противном случае восстанавливаем начальные значения
            if (day == 6 || day == 0) {
                picker.update({
                    minHours: 10,
                    maxHours: 16
                })
            } else {
                picker.update({
                    minHours: 9,
                    maxHours: 18
                })
            }
        }
    })

//валидация номера
    $("input[type=tel]").mask("0(999) 99-99-99");


    $("#feedback-slider").owlCarousel({
        items: 2,
        nav: false,
        dots: true,
        responsive: {
            768:{
              items: 2
            },
            0: {
                items: 1
            }
        }
    });

    var owl = $('#feedback-slider');
    owl.owlCarousel();
// Go to the next item
    $('.nextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.prevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    $('.burger').click(function () {
        $('.burger-line').toggleClass('active')
        $('.headerMain-main .container .menu').toggleClass('active')
        $('.headerMain-main .container .search-form').toggleClass('active')
        $('.headerMain-main').toggleClass('active')
    })

})


