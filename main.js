$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);

        return false;
      }
    }
  });
});

$( "#flip1" ).click(function() {
  $("#code > div > div:nth-child(1) > div > div.face.card-vertical-front").addClass('frontflipped');
  $("#code > div > div:nth-child(1) > div > div.face.card-vertical-back").addClass('backflipped');
});
$( "#flip2" ).click(function() {
  $("#code > div > div:nth-child(2) > div > div.face.card-vertical-front").addClass('frontflipped');
  $("#code > div > div:nth-child(2) > div > div.face.card-vertical-back").addClass('backflipped');
});
$( "#flip3" ).click(function() {
  $("#code > div > div:nth-child(3) > div > div.face.card-vertical-front").addClass('frontflipped');
  $("#code > div > div:nth-child(3) > div > div.face.card-vertical-back").addClass('backflipped');
});
$( "#flip4" ).click(function() {
  $("#code > div > div:nth-child(4) > div > div.face.card-vertical-front").addClass('frontflipped');
  $("#code > div > div:nth-child(4) > div > div.face.card-vertical-back").addClass('backflipped');
});
$( "#flipBack1" ).click(function() {
  $("#code > div > div:nth-child(1) > div > div.face.card-vertical-front").removeClass('frontflipped');
  $("#code > div > div:nth-child(1) > div > div.face.card-vertical-back").removeClass('backflipped');
});
$( "#flipBack2" ).click(function() {
  $("#code > div > div:nth-child(2) > div > div.face.card-vertical-front").removeClass('frontflipped');
  $("#code > div > div:nth-child(2) > div > div.face.card-vertical-back").removeClass('backflipped');
});
$( "#flipBack3" ).click(function() {
  $("#code > div > div:nth-child(3) > div > div.face.card-vertical-front").removeClass('frontflipped');
  $("#code > div > div:nth-child(3) > div > div.face.card-vertical-back").removeClass('backflipped');
});
$( "#flipBack4" ).click(function() {
  $("#code > div > div:nth-child(4) > div > div.face.card-vertical-front").removeClass('frontflipped');
  $("#code > div > div:nth-child(4) > div > div.face.card-vertical-back").removeClass('backflipped');
});
