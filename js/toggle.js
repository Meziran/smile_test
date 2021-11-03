// document.addEventListener("DOMContentLoaded", () => {
//   const accordions = document.querySelectorAll(".accordion");

//   accordions.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       const self = e.currentTarget;
//       const control = self.querySelector(".accordion__control");
//       const content = self.querySelector(".accordion__content");

//       self.classList.toggle("open");

//       // если открыт аккордеон
//       if (self.classList.contains("open")) {
//         control.setAttribute("aria-expanded", true);
//         content.setAttribute("aria-hidden", false);
//       } else {
//         control.setAttribute("aria-expanded", false);
//         content.setAttribute("aria-hidden", true);
//       }
//     });
//   });
// });
jQuery(($) => {
  $(".select").on("click", ".select__head", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().fadeOut();
    } else {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
      $(this).addClass("open");
      $(this).next().fadeIn();
    }
  });

  $(".select").on("click", ".select__item", function () {
    $(".select__head").removeClass("open");
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".select").length) {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
    }
  });
});
