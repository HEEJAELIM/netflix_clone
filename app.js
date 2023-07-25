$(function () {
  $(".answer").eq(0).show();
  $(".ask").click(function () {
    $(this).siblings(".answer").slideUp();
    $(this).next().stop().slideToggle(300);
    $(this).toggleClass("show");
    $(this).siblings('.ask').removeClass("show");
  });
});
