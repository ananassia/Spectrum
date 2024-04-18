window.addEventListener("scroll", (event) => {
  if (scrollY > 300) {
    close_all_header_div();
  }
});

// screen width
const ScreenWidth = window.innerWidth;

// menu navigation
function open_menu() {
  //open menu
  // close img
  document.getElementById("img-menu").style.display = "none";
  // open menu
  document.querySelector("nav").style.display = "block";

  document.getElementById("div-menu-nav").style.display = "flex";
}

function close_menu() {
  //close menu
  // open img
  document.getElementById("img-menu").style.display = "flex";
  document.querySelector("nav").style.display = "flex";
  document.getElementById("personal_account").style.display = "flex";

  // close menu
  document.getElementById("form_personal_account").style.display = "none";
  document.getElementById("div-menu-nav").style.display = "none";

  // default style form personal
  if (ScreenWidth < 600) {
    document.getElementById("div-menu-nav").style.width = "60%";
  } else if (ScreenWidth < 730) {
    document.getElementById("div-menu-nav").style.width = "55%";
  } else if (ScreenWidth < 965) {
    document.getElementById("div-menu-nav").style.width = "50%";
  } else if (ScreenWidth < 1110) {
    document.getElementById("div-menu-nav").style.width = "40%";
  } else if (ScreenWidth < 1270) {
    document.getElementById("div-menu-nav").style.width = "35%";
  } else if (ScreenWidth < 1455) {
    document.getElementById("div-menu-nav").style.width = "30%";
  } else {
    document.getElementById("div-menu-nav").style.width = "25%";
  }

  for (i = 0; i < 5; i++) {
    document.getElementsByClassName("menu-h1")[i].style.width = "90%";
  }
}

// open personal account in menu
function open_personal_menu() {
  document.getElementById("personal_account").style.display = "none";
  document.getElementById("form_personal_account").style.display = "flex";

  for (i = 0; i < 5; i++) {
    document.getElementsByClassName("menu-h1")[i].style.width = "70%";
  }

  // style form personal
  if (ScreenWidth < 600) {
    document.getElementById("div-menu-nav").style.width = "65%";
  } else if (ScreenWidth < 730) {
    document.getElementById("div-menu-nav").style.width = "60%";
  } else if (ScreenWidth < 965) {
    document.getElementById("div-menu-nav").style.width = "55%";
  } else if (ScreenWidth < 1110) {
    document.getElementById("div-menu-nav").style.width = "45%";
  } else if (ScreenWidth < 1270) {
    document.getElementById("div-menu-nav").style.width = "40%";
  } else if (ScreenWidth < 1455) {
    document.getElementById("div-menu-nav").style.width = "35%";
  } else {
    document.getElementById("div-menu-nav").style.width = "30%";
  }
}

// open search div in header
function open_search_div() {
  close_menu();

  document.getElementById("search_div").style.display = "block";
  document.getElementById("shadow-body").style.display = "block";
  document.getElementById("shadow-body").style.height = window.innerHeight + 'px';

}
// open tel div in header
function open_tel_div() {
  close_menu();

  document.getElementById("tel_div").style.display = "block";
  document.getElementById("shadow-body").style.display = "block";
  document.getElementById("shadow-body").style.height = window.innerHeight + 'px';
}

// close all in header
function close_all_header_div() {
  close_menu();

  document.getElementById("search_div").style.display = "none";
  document.getElementById("tel_div").style.display = "none";
  document.getElementById("shadow-body").style.display = "none";
}

// main - slider news and blog
function main_slider_next(x, word) {
  let next = 0;
  let prev = 0;

  if (word == "blog") active_blog = 1;
  else active_new = 1;

  if (x == 3) prev = 1;
  else prev = Number(x) + 1;

  next = Number(prev) + 1;
  if (next == 4) next = 1;

  // slides
  let prev_slide = document.getElementById("main-" + word + "-slider" + x);
  let active_slide = document.getElementById("main-" + word + "-slider" + prev);
  let next_slide = document.getElementById("main-" + word + "-slider" + next);

  // arrows slide
  let prev_arrow = document.getElementById("arrow-" + word + "-slide" + x);
  let active_arrow = document.getElementById("arrow-" + word + "-slide" + prev);
  let next_arrow = document.getElementById("arrow-" + word + "-slide" + next);

  // previous slide
  prev_slide.className = "main-news-blog-slider main-" + word + "-slider3";
  prev_arrow.style.display = "none";

  // next slide
  next_slide.className = "main-news-blog-slider main-" + word + "-slider2";
  next_arrow.style.display = "none";

  // active slide
  active_slide.className = "main-news-blog-slider main-" + word + "-slider1";
  active_arrow.style.display = "block";
}



// personal account page - open and close personal offer
function open_personal_offer() {
  document.getElementById("personal_offer").style.display="block";
}

function close_personal_offer() {
  document.getElementById("personal_offer").style.display="none";
}


// configurator page
function open_conf_positions(x) {
  document.getElementById("configurator_positions" + x).style.display = "block";

  document.getElementById("conf-pos-bt-pas" + x).style.display="block";
  document.getElementById("conf-pos-bt-act" + x).style.display="none";

}

function close_conf_positions(x) {
  document.getElementById("configurator_positions" + x).style.display = "none";

  document.getElementById("conf-pos-bt-pas" + x).style.display="none";
  document.getElementById("conf-pos-bt-act" + x).style.display="block";
}


// input type number minus - 
function stepDown(x) {
  let value = document.getElementById("basket_number" + x).value;
  if (value > 0) { 
      document.getElementById("basket_number" + x).value--;
  }
}

// input type number plus + 
function stepUp(x) {
  document.getElementById("basket_number" + x).value++;
}
