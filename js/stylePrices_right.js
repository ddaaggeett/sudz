$(document).ready(function(){
    var imgX = $('#img_basicwash_right').position()
    var newXPos = imgX.left + 233;
    $("#basicwash_right").css({ left: newXPos });

    imgX = $('#img_soapywash_right').position()
    newXPos = imgX.left + 213;
    $("#soapywash_right").css({ left: newXPos });

    imgX = $('#img_superwash_right').position()
    newXPos = imgX.left + 213;
    $("#superwash_right").css({ left: newXPos });
})
