"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
"use strict";

$(function () {
  $('.view-btn i').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('_this-open');
    $(this).closest('.modal-content').find('.modal-footer').slideToggle();
  });
});
//# sourceMappingURL=all.js.map
