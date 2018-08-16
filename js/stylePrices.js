$(document).ready(function(){
    var imgX = $('#img_basicwash').position()
    var newXPos = imgX.left + 245;
    $("#basicwash").css({ left: newXPos });

    imgX = $('#img_soapywash').position()
    newXPos = imgX.left + 210;
    $("#soapywash").css({ left: newXPos });

    imgX = $('#img_superwash').position()
    newXPos = imgX.left + 205;
    $("#superwash").css({ left: newXPos });
})
