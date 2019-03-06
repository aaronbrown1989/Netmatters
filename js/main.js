$('.slick').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true
});

$("#my-menu").trigger("open");

$("#my-menu").trigger("close");

$(document).ready(function(){
  $(".acceptcookies").on('click', function frontcookie(){
      setCookie("acceptCookies", true, 365);
    })
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
