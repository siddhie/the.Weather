$(".themechange__btn").on("click", function () {
  $(".full__cover").toggleClass("theme_change");
  $(".description").toggleClass("suggestion__dark");
  $(".card").toggleClass("search__dark");
  $(".nav__contactus").toggleClass("contactus__dark");
  $(".font__color_dark").toggleClass("theme_change_font");
});
$(".dark__search").on("click", function () {
  $(".full__cover").toggleClass("theme_change");
  $(".description").toggleClass("suggestion__dark");
  $(".card").toggleClass("search__dark");
  $(".nav__contactus").toggleClass("contactus__dark");
  $(".font__color_dark").toggleClass("theme_change_font");
});

$(".themechange__btn").on("click", function () {
  if ($(".full__cover").hasClass("theme_change")) {
    $(".themeChangeIcon").removeClass("uil-moon");
    $(".themeChangeIcon").addClass("uil-sun");
  } else {
    $(".themeChangeIcon").removeClass("uil-sun");
    $(".themeChangeIcon").addClass("uil-moon");
  }
});

// hooooooooooooooooooo gyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
