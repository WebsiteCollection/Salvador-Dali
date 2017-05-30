$(document).ready(function() {

  // ----------- TABLET AND MOBILE NAVIGATION --------------- //

  $( ".toggle-button" ).click(function() {
     $( ".nav" ).slideToggle(300)//duration of 300
  });

  $('.toggle-button').on('click', function() {
      this.classList.toggle('change');//changing nav style: from hamburger to x
  });


  // ----------- CIRCLE CLICK --------------//

  $('#ho').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#home-nav').position().top}, 400);
            return false;
          }
        );

  $('#bi').click(
          function (e) {
            $('html, body').animate({scrollTop: $('.dali-bio').position().top}, 400);
            return false;
          }
        );

  $('#su').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#sur-bg').position().top}, 400);
            return false;
          }
        );

  $('#wo').click(
          function (e) {
            $('html, body').animate({scrollTop: $('.works').position().top}, 400);
            return false;
          }
        );

  $('#ci').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#cites').position().top}, 400);
            return false;
          }
        );

  // ----------- ACTIVITIES CLICK ------------ //

  $('#one-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#info1').position().top}, 200);
            return false;
          }
        );

  $('#two-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#info2').position().top}, 300);
            return false;
          }
        );

  $('#three-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#info3').position().top}, 400);
            return false;
          }
        );

  $('#four-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#info4').position().top}, 500);
            return false;
          }
        );

  $('#five-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#info5').position().top}, 600);
            return false;
          }
        );

  $('#six-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#info6').position().top}, 700);
            return false;
          }
        );

  // ----------- BACK TO TOP ------------ //

  var topButton = $('.to-top');

      //Show to-top button when html reaches 450
      $(window).scroll(function(){
        if ($(this).scrollTop() > 450){
          topButton.fadeIn();
        }
        else {       
          topButton.fadeOut();
        }
      });

      //Scroll top function
      topButton.click(function(event){
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
        return false;
      }); 

});

// ------------- GOOGLE MAP ------------ //
function myMap() {
  var myLatLng = {lat: 36.04, lng: -115.25};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Munchies World'
  });
}

