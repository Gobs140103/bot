document.addEventListener("DOMContentLoaded", function() {
 
  const elemsTap = document.querySelector(".tap-target");
  if (elemsTap) {
    const instancesTap = M.TapTarget.init(elemsTap, {});
    instancesTap.open();
    setTimeout(function() {
      instancesTap.close();
    }, 4000);
  }
  
  $("div").removeClass("tap-target-origin");
  $(".dropdown-trigger").dropdown();
  $(".modal").modal();
});

function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./static/js/components/index.js');

window.addEventListener('load', function() {

  $(document).ready(function() {
    $("div").removeClass("tap-target-origin");
    $(".dropdown-trigger").dropdown();
    $(".modal").modal();
  });

  $("#profile_div").click(function() {
    $(".profile_div").toggle();
    $(".widget").toggle();
  });

  $("#clear").click(function() {
    $(".chats").fadeOut("normal", function() {
      $(".chats").html("");
      $(".chats").fadeIn();
    });
  });

  $("#close").click(function() {
    $(".profile_div").toggle();
    $(".widget").toggle();
    scrollToBottomOfResults();
  });
});



