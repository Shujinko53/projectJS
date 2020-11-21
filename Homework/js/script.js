$(document).ready(function() {
    $('.main_btna, .col-sm-3, a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });

    $('.close').on('click', function() {
        $('.modal').slideUp();
        $('.overlay').fadeOut();
    });

    $(document).keydown('27', function() {
        $('.modal').slideUp();
        $('.overlay').fadeOut();
    });
});