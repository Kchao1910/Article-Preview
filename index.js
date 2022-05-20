document.addEventListener('click', function (event) {
	if (event.target.matches('.click-area')) {

    if (window.matchMedia('(max-width: 728px)').matches === true) {
      console.log("mobile")
      let mobileIcons = document.querySelector(".mobile-social-media-icons");
      mobileIcons.classList.toggle("hidden");
    } else {
      let desktopIcons = document.querySelector(".social-media-icons");
      desktopIcons.classList.toggle("hidden");
    }
	}

}, false);
