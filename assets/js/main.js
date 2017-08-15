var currentWidthWindow = document.documentElement.clientWidth;

function menu() {
  $('.gamburger').click(function () {
    if (!$('.icon-menu').hasClass('active')) {
      $('.top-menu').find('ul').css('display', 'flex');
      $('.top-menu').find('.sw-topper').css('background', 'white');
      $('.top-menu').find('.sw-bottom').css('background', 'white');
      $('.top-menu').find('.sw-footer').css('background', 'white');
      $('.top-menu').css('background', '#516199');
      $('.ul').css('background', '#516199');
      $('.top-menu').find('ul').css('opacity', '1');
      $('.icon-menu').addClass('active');

    } else {
      $('.top-menu').find('ul').css('display', 'none');
      $('.top-menu').css('background', 'none');
      $('.ul').css('background', 'none');
      $('.top-menu').find('ul').css('opacity', '0');
      $('.top-menu').find('.sw-topper').css('background', '#516199');
      $('.top-menu').find('.sw-bottom').css('background', '#516199');
      $('.top-menu').find('.sw-footer').css('background', '#516199');
      $('.icon-menu').removeClass('active');
    }
  });
}



$(document).ready(function ($) {
  menu();

  window.onresize = function () {
    var newWidthWindow = document.documentElement.clientWidth;
    // сменили ориентацию на телефоне/планшете, но новая ширина все равно не требует десктоп версии 
    //if (currentWidthWindow < newWidthWindow && newWidthWindow < 1200) {
    //  return;
    //}
    // else if (currentWidthWindow > newWidthWindow && currentWidthWindow < 1200) {
    //   //не работает()
    //   return;
    // }
    //else
    if (newWidthWindow < 1200) {
      if ($('.icon-menu').hasClass('active')) {
        $('.top-menu').css('background', 'transparent');
        $('.top-menu').find('ul').css('opacity', '1');
        $('.top-menu').find('.sw-topper').css('background', '#516199');
        $('.top-menu').find('.sw-bottom').css('background', '#516199');
        $('.top-menu').find('.sw-footer').css('background', '#516199');
        $('.icon-menu').removeClass('active');
      }
      else {
        $('.top-menu').find('ul').css('display', 'inline-flex');
        $('.top-menu').find('ul').css('opacity', '0');
      }
    } else if (newWidthWindow > 1200) {
      if ($('.icon-menu').hasClass('active')) {
        $('.icon-menu').removeClass('active');
        $('.top-menu').css('background', 'transparent');
        $('.top-menu').find('.sw-topper').css('background', '#516199');
        $('.top-menu').find('.sw-bottom').css('background', '#516199');
        $('.top-menu').find('.sw-footer').css('background', '#516199');
      }
      else {
        $('.top-menu').find('ul').css('opacity', '1');
        $('.top-menu').find('ul').css('display', 'inline-flex');
      }
    }
    //currentWidthWindow = newWidthWindow;
  }
});


var owl = $('.owl-carousel-for-1');
owl.owlCarousel({
  margin: 10,
  nav: true,
  navText: true,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    }
  }
})

var owl = $('.owl-carousel-for-2');
owl.owlCarousel({
  margin: 10,
  nav: true,
  dots: false,
  loop: true,

  responsive: {
    0: {
      items: 2
    },

    760: {
      items: 3
    }
  }
})

var owl = $('.owl-carousel-main-slider');
owl.owlCarousel({
  margin: 10,
  nav: true,
  navText: false,
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    }
  }
})

$(".lightgallery_js").lightGallery({
  selector: '.carousel-gallery__item'
});


$(document).on('opening', '.remodal', function () {
  console.log('opening');
});

$(document).on('opened', '.remodal', function () {
  console.log('opened');
});

$(document).on('closing', '.remodal', function (e) {
  console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('closed', '.remodal', function (e) {
  console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('confirmation', '.remodal', function () {
  console.log('confirmation');
});

$(document).on('cancellation', '.remodal', function () {
  console.log('cancellation');
});


$('[data-remodal-id=modal2]').remodal({
  modifier: 'with-red-theme'
});
