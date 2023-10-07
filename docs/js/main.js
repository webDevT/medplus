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

if($(window).width() < 768) {
    $('.menu a').click(function(){
        $('.menu-wrapper').removeClass('active');
        $('.menu-btn').removeClass('active');
    })
    }
