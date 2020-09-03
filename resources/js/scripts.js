$(document).ready(
    function () {
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                    $('.sticky').css('height', '120px')
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '80%'
        }
        )
    }
)

// mobile-nav-icon
$('.nav-icon').click(
    function() {
        $('.main-nav').slideToggle(200);

        if($('.nav-icon').hasClass('fa-bars')) {
            $('.nav-icon').removeClass('fa-bars');
            $('.nav-icon').addClass('fa-times');
        } else {
            $('.nav-icon').removeClass('fa-times');
            $('.nav-icon').addClass('fa-bars');
        }
    }
)