$(document).ready(function () {
  /* Navbar  -> nav-bottom */
  $("#bar").click(function () {
    $("#bar").toggleClass("fa-minus");
    $("#none").removeClass(none).fadeToggle(400);
  });
  /* BacktoTop */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#toTop").removeClass("none");
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });

  /* Counter text*/
  // var interval = 0;
  // const animation = setInterval(function () {
  //   $(".counter__num").text(interval);
  //   if (interval == $(".counter__num").text()) {
  //     clearInterval(animation);
  //   } else {
  //     interval++;
  //   }
  // }, 10);
});
