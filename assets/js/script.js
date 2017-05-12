$(document).ready(function() {

  // ----------- TABLET AND MOBILE NAVIGATION --------------- //

  $( ".toggle-button" ).click(function() {
     $( ".nav" ).slideToggle(300)//duration of 300
  });

  $('.toggle-button').on('click', function() {
      this.classList.toggle('change');//changing nav style: from hamburger to x
  });

  // ----------- ACTIVITIES CLICK ------------ //

  $('#br-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#brazil').position().top}, 200);
            return false;
          }
        );

  $('#eg-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#egypt').position().top}, 300);
            return false;
          }
        );

  $('#uk-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#uk').position().top}, 400);
            return false;
          }
        );

  $('#it-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#italy').position().top}, 500);
            return false;
          }
        );

  $('#jp-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#japan').position().top}, 600);
            return false;
          }
        );

  $('#usa-box').click(
          function (e) {
            $('html, body').animate({scrollTop: $('#usa').position().top}, 700);
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

  var mascot = $('.mascot');

      //Show to-top button when html reaches 450
      $(window).scroll(function(){
        if ($(this).scrollTop() > 650){
          mascot.fadeIn();
        }
        else {       
          mascot.fadeOut();
        }
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

