function openMenu() {
    var mob = document.getElementById("mobile");
    if (mob.style.display === "flex") {
      mob.style.display = "none";
    } else {
      mob.style.display = "flex";
      window.scrollTo(0,0);
    }
  }
function hideMenu(x) {
      var mob = document.getElementById("mobile");
      if (windowSize.matches) { // If media query matches
          mob.style.display = "none";
      }
  }
  var windowSize = window.matchMedia("(min-width: 620px)")
  hideMenu(windowSize) // Call listener function at run time
  windowSize.addListener(hideMenu) // Attach listener function on state