$( document ).ready(function() {
  $('a.expand').on('click', function() {
    $(this).parent().find('div.chevron-control').removeClass('expanded').addClass('collapsed');
    $(this).parent().find('p.chevron-control').removeClass('collapsed').addClass('expanded');
    $(this).parent().find('a.expand').hide();
    $(this).parent().find('a.collapse').show();
  });

  $('a.collapse').on('click', function() {
    $(this).parent().find('div.chevron-control').removeClass('collapsed').addClass('expanded');
    $(this).parent().find('p.chevron-control').removeClass('expanded').addClass('collapsed');
    $(this).parent().find('a.collapse').hide();
    $(this).parent().find('a.expand').show();
  });
});

