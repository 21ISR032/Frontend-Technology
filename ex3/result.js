// const paragraph = document.querySelector('#paragraph');

// const params = new URLSearchParams(window.location.search);

// params.forEach((value, key)=>{
//     paragraph.append(`Hi ${value}`);
//     paragraph.append(document.createElement('br'));
// });



$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
    var imagePath = 'path/to/your/image.jpg';
    $('#myElement').css('background-image', 'url(' + imagePath + ')');

    $('.feature').hover(function () {
        $(this).css('box-shadow', '0 0 10px rgba(0, 0, 0, 0.2)');
    }, function () {
        $(this).css('box-shadow', 'none');
    });


    $('#ctaButton').on('click', function () {
        alert('Get ready to PLAY!');
    });
});
