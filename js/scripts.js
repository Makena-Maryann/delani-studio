$(document).ready(function () {
  $(".clickable1").click(function () {
    $(".toggle1").toggle();
    $(".click1").toggle();
  });

  $(".clickable2").click(function () {
    $(".toggle2").toggle();
    $(".click2").toggle();
  });

  $(".clickable3").click(function () {
    $(".toggle3").toggle();
    $(".click3").toggle();
  });

  $(".work-1").hover(function () {
    $(".project-name1").toggle();
  });

  $(".work-2").hover(function () {
    $(".project-name2").toggle();
  });

  $(".work-3").hover(function () {
    $(".project-name3").toggle();
  });

  $(".work-4").hover(function () {
    $(".project-name4").toggle();
  });

  $(".work-5").hover(function () {
    $(".project-name5").toggle();
  });

  $(".work-6").hover(function () {
    $(".project-name6").toggle();
  });

  $(".work-7").hover(function () {
    $(".project-name7").toggle();
  });

  $(".work-8").hover(function () {
    $(".project-name8").toggle();
  });

  $("form").submit(function (event) {
    event.preventDefault();
    let fullName = $("#name").val();
    alert(
      fullName + " we have received your messsage. Thank you for reaching out."
    );
  });
});
