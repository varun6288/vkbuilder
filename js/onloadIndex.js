$(function () {
    //$("#maindiv").hide();
    $("#maindiv").slideUp(1000).slideDown(1000);
   
    $("#bannerh2").hide();
    $("#bannerh2").fadeIn(6000);

    $("#bannerp1").animate({
        "margin-bottom": "+=20px"
    });
    $("#bannerp2").animate({
        "margin-bottom": "+=20px"
    });

    $("#maindiv").focus();
    //$("#bannerp1").fadeIn(2000);

   
    //$("#bannerp2").fadeIn(2000);

    //while (true) {
    //    //your code
    //}

    //$("#bannerp1").fadeTo(2000, 1, function () {
    //    $("#bannerp2").fadeTo(2000, 1, function () {


    //    })

    //});


    //setInterval(myRepeat("bannerp1"), 1000);
    //setInterval(myRepeat("bannerp2"), 2000);
});

function myRepeat(elem) {
    $('#'+elem).delay(1000).fadeOut(2000).delay(1000).fadeIn(2000).myRepeat(elem);
    }