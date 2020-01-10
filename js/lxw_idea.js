$(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blah').css('display', 'block');
                $('#blah').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imgInp").change(function () {
        readURL(this);
    });
    $('#blah').on('click', function () {
        $('#blah').css('display', 'none');
    })
    $('#btn_1').on('click', function () {
        $('.d_idea').css('display', 'none');
        $('.idea2').fadeIn();
        $('.d_idea2').css('display', 'none');
    })
    $('#btn_2').on('click', function () {
        $('.d_idea').css('display', 'none');
        $('.d_idea2').fadeIn();
        $('.idea2').css('display', 'none');
    })
    $('.btn').on('click', function () {
        $('.d_idea').fadeIn();
        $('.idea2').css('display', 'none');
        $('.d_idea2').css('display', 'none');
    })
})