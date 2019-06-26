$(document).ready(function(){
    $("input[name='phone']").mask("+7 (999) 999-99-99");

    $("#start_bitrix").click(function(){
        $('.container_sertificates').addClass('container_sertificates-active');
        $('#bitrix').addClass('sertificate_img-active');
        $('.container_overall').addClass('container_overall-blur');
        $('.footer_fix').addClass('footer_fix-blur');
    });
    $("#start_amo").click(function(){
        $('.container_sertificates').addClass('container_sertificates-active');
        $('#amo').addClass('sertificate_img-active');
        $('.container_overall').addClass('container_overall-blur');
        $('.footer_fix').addClass('footer_fix-blur');
    });
    $("#modal_close").click(function(){
        $('.container_sertificates').removeClass('container_sertificates-active');
        $('.sertificate_img-active').removeClass('sertificate_img-active');
        $('.container_overall').removeClass('container_overall-blur');
        $('.footer_fix').removeClass('footer_fix-blur');
    });
});

$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top - 100;
        $('html, body').animate({scrollTop: dn}, 1000);
    });
});