
// When page loads
$(document).ready(function () {
  setCarousel();

  // Mobile menu functionality
  var mobileMenuOpenBtn = $('[data-mobile-menu-open-btn]');
  var mobileMenu = $('[data-mobile-menu]');
  var mobileMenuCloseBtn = $('[data-mobile-menu-close-btn]');
  var overlay = $('[data-overlay]');
  
  mobileMenuOpenBtn.each(function(index) {
      // mobile menu function
      var mobileMenuCloseFunc = function() {
          mobileMenu.eq(index).removeClass('active');
          overlay.removeClass('active');
      };
  
      $(this).on('click', function() {
          mobileMenu.eq(index).addClass('active');
          overlay.addClass('active');
      });
  
      mobileMenuCloseBtn.eq(index).on('click', mobileMenuCloseFunc);
      overlay.on('click', mobileMenuCloseFunc);
  });

  // Accordion functionality
  $('[data-accordion-btn]').click(function() {
    var clickedBtn = $(this).next().hasClass('active');

    if (!clickedBtn) {
        $('[data-accordion].active').removeClass('active');
        $('[data-accordion-btn].active').removeClass('active');
    }

    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
  });
});


const sliderTimeout = 6000;
function setCarousel()
{
  var items = document.querySelectorAll('.carousel .slider-item');
  var dots = document.querySelectorAll('.carousel-indicators li');
  var currentItem = 0;
  var isEnabled = true;
  
  function autoSlide()
  {
    if (isEnabled && items.length > 1)
    {
      let n = currentItem;
      hideItem('to-left');
      currentItem = ((n + 1) + items.length) % items.length;
      showItem('from-right');
    }

    setTimeout(autoSlide, sliderTimeout);
  }

  function hideItem(direction)
  {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    dots[currentItem].classList.remove('active');
    items[currentItem].addEventListener('animationend', function()
    {
      this.classList.remove('active', direction);
    });
  }

  function showItem(direction)
  {
    items[currentItem].classList.add('next', direction);
    dots[currentItem].classList.add('active');
    items[currentItem].addEventListener('animationend', function()
    {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
    });
  }

  document.querySelector('.carousel-indicators').onclick = function(e) 
  {
    var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (target !== currentItem && target < dots.length)
    {
      if (target < currentItem)
      {
        hideItem('to-right');
        currentItem = target;
        showItem('from-left');
      }
      else
      {
        hideItem('to-left');
        currentItem = target;
        showItem('from-right');
      }
    }
  };

  setTimeout(autoSlide, sliderTimeout);
}
