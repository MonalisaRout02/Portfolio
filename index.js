var prevScrollpos = window.pageYOffset;

  var prevScrollpos=window.pageXOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }





function moveTopCloud() {
    $("img.top-cloud").animate({right: "-=40px"}, 4000)
                      .animate({right: "+=40px"}, 4000);
}

function moveBottomCloud() {
    $("img.bottom-cloud").animate({left: "-=40px"}, 4000)
                         .animate({left: "+=40px"}, 4000);
}
moveTopCloud();
moveBottomCloud();
setInterval(function() {
    moveTopCloud();
    moveBottomCloud();
}, 2000); 

// Define a function to move the sun up and down
function moveSun() {
    $(".sun").animate({top: "-=40px"}, 900)
             .animate({top: "+=40px"}, 900);
}

// Call the function initially to start the movement
moveSun();

// Set an interval to call the function repeatedly
setInterval(moveSun, 2000); // Adjust the interval time as needed (2000 milliseconds = 2 seconds)



