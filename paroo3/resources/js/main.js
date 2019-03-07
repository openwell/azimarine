//Menu
let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("toggle");
  if (nav.style.transform != "translateX(0%)") {
    nav.style.transform = "translateX(0%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
};

window.onresize = () => {
  if (
    window.matchMedia("(min-width: 576px)").matches &&
    nav.style.transform === "translateX(0%)"
  ) {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
    menuIcon.classList.toggle("toggle");
  }
};

window.onclick = event => {
  if (event.target.classList[0] == "overlay_bg") {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
    menuIcon.classList.toggle("toggle");
  }
};

window.onscroll = () => {
  if (window.pageYOffset >= 100) {
    return document
      .querySelector(".nav_logo")
      .classList.add("nav_logo--white", "animated", "fadeInDown");
  }
  if (window.pageYOffset <= 100) {
    return document
      .querySelector(".nav_logo")
      .classList.remove("nav_logo--white", "animated", "fadeInDown");
  }
};

var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#FFFFFF" d="M 16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" /></svg></button>',
    nextButton = '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z"></path></svg></button>';

$('.single-item').slick({
  infinite: true,
  dots: true,
  // autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  cssEase: 'ease-in-out',
  prevArrow: prevButton,
  nextArrow: nextButton
});

$('.quote-container').mousedown(function(){
  $('.single-item').addClass('dragging');
});
$('.quote-container').mouseup(function(){
  $('.single-item').removeClass('dragging');
});
