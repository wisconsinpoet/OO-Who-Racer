$(document).ready(function() {
  $('body').on("click", "#reset_button", function(e) {
    resetRace();
  });
  $(document).on('keyup', function(event) {
    var strip1 = $('#player1_strip')
    var strip2 = $('#player2_strip')

    var player1 = strip1.find('.active')
    var player2 = strip2.find('.active')

      if(event.keyCode==81) {
        $(player1).removeClass("active").next().addClass("active");
        if(player1.next().hasClass("end")) {
          raceStop();
          $("#victory1").css("display", "block");
        };
      };
      if(event.keyCode==80) {
        $(player2).removeClass("active").next().addClass("active");
        if(player2.next().hasClass("end")) {
          raceStop();
          $("#victory2").css("display", "block");
        };
      };
  });
});

function raceStop() {
  $(document).unbind('keyup');
}

function resetRace() {
  $('.racer_table').find('.active').removeClass("active");
  $('.racer_table').find('.start').addClass("active");
}



// strip1.removeClass("active").find('.start').addClass("active");
