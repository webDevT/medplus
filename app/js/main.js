$(function () {
  $(".menu-btn").click(function () {
    $(this).toggleClass("active");
    $(".menu-wrapper").toggleClass("active");
  });
  $(".menu").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
