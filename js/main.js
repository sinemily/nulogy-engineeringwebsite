$( document ).ready(function() {
  $('a.menu').on('click', function() {
    $('nav.site').removeClass('mobile-closed').addClass('mobile-open');
    $('a.menu').hide();
    $('a.close').show();
  });

  $('a.close, nav.site a').on('click', function() {
    $('nav.site').removeClass('mobile-open').addClass('mobile-closed');
    $('a.menu').show();
    $('a.close').hide();
  });
});
