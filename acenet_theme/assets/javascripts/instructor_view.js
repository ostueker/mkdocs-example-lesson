// Cookie functions for toggle-switch state
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function init_instructor_mode_from_cookie() {
  let instructor_view_state = getCookie("instructor_view_state");
  if (instructor_view_state == "off") {
      $(".toggle_instructor_view > label > input").prop( "checked", false );
      $(".instructor").hide();
      $(".learner").show();
  } else if (instructor_view_state == "on") {
      $(".toggle_instructor_view > label > input").prop( "checked", true );
      $(".learner").hide();
      $(".instructor").show();
  } else {
    instructor_view_state = "off";
    if (instructor_view_state != "" && instructor_view_state != null) {
      setCookie("instructor_view_state", instructor_view_state, cookie_lifetime);
    }
  }

  if ( $(".learner").length < 1 &&
       $(".instructor_view_state").length < 1 ) {
    $(".toggle_instructor_view").hide();
  }
}


// Initialize instructor as hidden.
init_instructor_mode_from_cookie()

// Toogle between learner and instructor
$(".toggle_instructor_view").click(function(event) {
  if ($('.toggle_instructor_view > label > input').is(":checked")) {
    $(".learner").hide();
    $(".instructor").show();
    setCookie("instructor_view_state", "on", cookie_lifetime);
  } else {
    $(".learner").show();
    $(".instructor").hide();
    setCookie("instructor_view_state", "off", cookie_lifetime);
  }
});
