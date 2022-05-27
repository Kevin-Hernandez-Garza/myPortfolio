$(function () {
    // when there is a scroll event
   $(document).scroll(function() {
    // checking the nav 
       var $nav = $("#mainNav");
    // toggling the nav when the top is greater than the nav height
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
   })
})