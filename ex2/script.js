$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Hover effect on features
    $('.feature').hover(function () {
        $(this).css('box-shadow', '0 0 10px rgba(0, 0, 0, 0.2)');
    }, function () {
        $(this).css('box-shadow', 'none');
    });

    // Click event on the CTA button
    $('#ctaButton').on('click', function () {
        alert('Get ready to explore!');
    });
});
