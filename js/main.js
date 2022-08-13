// Script for carousell
$('.card-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Script for side nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".container").style.opacity = 0.7;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".container").style.opacity = 1;
}


// Script for Sign in pop up
function openForm() {
    $('#sign-in-form').show();
    $('body').css('overflow', 'hidden');
    $('<div/>', {
        id: "overlay"
    }).appendTo(".container");
    $('#overlay').attr('onclick', 'closeForm()');

}

function closeForm() {
    $('#sign-in-form').hide();
    $('body').css('overflow', 'auto');
    $('#overlay').remove();
}