// When page loads
$(document).ready(function () 
{
  // Slideshow
  /*getHighlightedProducts();*/

  getProducts();
});

function getHighlightedProducts()
{
  try
  {

    //informar la petición ajax
    let url = '/products/highlighted';
    let parametres = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "GET"
    };

    //enviar la petición al servidor
    fetch(url, parametres)
    .then(function (resposta) 
    {
        if (resposta.ok)
        {
            return resposta.json();
        }
        else
        {
            console.log(resposta);
            throw("La petició no s'ha pogut realitzar");
        }
    })
    .then(function (resultat)
    {
        if (resultat.codi == "00")
        {
          var carouselInner = document.querySelector('#carousel-inner');
          let carouselIndicators = document.querySelector("#carousel-indicators");

          i = 0;
          // Set the products to show
          resultat.products.forEach(product => {
            let itemDiv = document.createElement("div");
            itemDiv.className = "item";
            if (i==0) itemDiv.classList.add("active");

            let container = document.createElement("div");
            container.className = "carousel-container";

            let img = document.createElement("img");
            img.src = product.image;
            img.style = "width:100%";
            container.appendChild(img);

            let text =  document.createElement("div");
            text.className = "text";
            text.innerText = product.name;
            container.appendChild(text);

            itemDiv.appendChild(container);
            carouselInner.appendChild(itemDiv);

            let dot = document.createElement("li");
            if (i==0) dot.classList.add("active");
            carouselIndicators.appendChild(dot);
              
            i += 1;
          });

          setCarousel();
        }
        else
            throw(resultat.resposta);
    })
    .catch(function (error)
    {
        alert(error);
    });
  }
  catch (error)
  {
      alert(error);
  }
}

function setCarousel()
{
  var items = document.querySelectorAll('.carousel .item');
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

    setTimeout(autoSlide, 4000);
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

  document.querySelector('.carousel-control.left').onclick = function() 
  {
    if (isEnabled)
    {
      let n = currentItem;
      hideItem('to-right');
      currentItem = ((n - 1) + items.length) % items.length;
      showItem('from-left');
    }
  };

  document.querySelector('.carousel-control.right').onclick = function() 
  {
    if (isEnabled)
    {
      let n = currentItem;
      hideItem('to-left');
      currentItem = ((n + 1) + items.length) % items.length;
      showItem('from-right');
    }
  };

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

  if (items.length <= 1 || dots.length <= 1)
    $('.carousel-control').hide();

  setTimeout(autoSlide, 4000);
}