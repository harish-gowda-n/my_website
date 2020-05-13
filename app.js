
$('body').css('padding-top', $('.navbar-custom').outerHeight() + 'px')

if ($('.smart-scroll').length > 0) {

  var last_scroll_top = 0;

  $(window).on('scroll', function() {

    scroll_top = $(this).scrollTop();

    if(scroll_top == 0){
      $('.smart-scroll').removeClass('trans');
    }

    else if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up trans');
    }

    else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });

  function sendEmail()
{
    const name = $('#name').val();
    const msg = $('#message').val();
    window.location = "mailto:nharishg12@gmail.com?subject=Contact from website&body=Name - "+name+"%0d%0aMessage - %0d%0a"+msg;
}

function expand(){
  $('#contact-form').collapse('show');
}

}
