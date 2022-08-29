var page = 1;

//activar listener combo productes a mostrar
document.querySelector('#numproducts').onchange = function() {
	getProducts();
};

//activar listener filtro de apellido
document.querySelector('#combocategorias').onchange = function() {
	getProducts();
};

function getProducts(p = 1)
{
  try
  {
    page = p;
    
    let category = document.getElementById('combocategorias').value.trim();
    let numproducts = document.getElementById("numproducts").value;
    //let type = document.getElementById('loginPassword').value.trim();
    
    //Objecte js amb les dades
    let datos = {
        'category' : category,
        'page' : page,
        'numProducts' : numproducts
    };

    //informar la petición ajax
    let url = 'https://raw.githubusercontent.com/natibalada/natibalada.github.io/development/files/products.min.json';

    //enviar la petición al servidor
    fetch(url)
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
        if (resultat.length == 0)
            throw("No hi ha productes");
        else
        {
            // Get the pages to show
            var numProducts = data.numProducts ?? 10;
            var page = data.page ?? 1;
            var row_from = (page - 1) * numProducts;

            // Get ALL products
            //var products = resultat::orderBy('date', 'DESC')->offset($row_from)->limit($numProducts)->get();
            var totalProducts = resultat.length ?? 0;

            

            /*var itemList = document.querySelector('#item-list');
            itemList.innerHTML = "";

            // Set the pagination of products
            var pagination = document.createElement("div");
            pagination.setAttribute("id", "pagination");
            pagination.innerHTML = "";
            for(let x = 1; x <= resultat.pages; x++)
            {
                // Backward btn

                if (x == page)
                    pagination.innerHTML+= `<a href='#' ${x}'>
                        <input type='button' id='pagina' class="active" value='${x}' onclick='getProducts(${x})') >
                    </a>`
                else
                    pagination.innerHTML+= `<a href='#' ${x}'>
                        <input type='button' id='pagina' value='${x}' onclick='getProducts(${x})') >
                    </a>`
                
                // Forward btn
                
            }
            itemList.appendChild(pagination);

            let itemContainer = document.createElement("div");
            itemContainer.id = "item-container";
            itemList.appendChild(itemContainer);

            // Set the products to show
            resultat.products.forEach(product => {
                let itemDiv = document.createElement("div");
                itemDiv.className = "item";
                let itemHeader = document.createElement("div");
                itemHeader.className = "item-header";

                let img = document.createElement("img");
                img.src = product.image;
                itemHeader.appendChild(img);

                if (product.isNew)
                {
                    let newTag =  document.createElement("div");
                    newTag.className = "new";
                    newTag.innerText = "NUEVO";
                    itemHeader.appendChild(newTag);
                }

                let itemBody = document.createElement("div");
                itemBody.className = "item-body";
                let name = document.createElement("p");
                name.innerHTML = product.name;
                let price = document.createElement("p");
                price.innerHTML = product.price + "€";
                itemBody.appendChild(name);
                itemBody.appendChild(price);

                let form = document.createElement("form");
                let hiddenInput = document.createElement("input");
                hiddenInput.setAttribute("type", "hidden");
                hiddenInput.setAttribute("name", "productid");
                hiddenInput.setAttribute("id", "productid");
                hiddenInput.setAttribute("value", product.id);
                
                let buyBtn = document.createElement("input");
                buyBtn.setAttribute("type", "button");
                buyBtn.setAttribute("class", "buyBtn");
                buyBtn.setAttribute("name", "buyBtn");
                buyBtn.setAttribute("id", "buyBtn");
                buyBtn.setAttribute("value", "Añadir al carrito");
                buyBtn.onclick = function ()
                {
                    addToCart(this.closest('form').querySelector('input[type="hidden"]').value);
                };

                form.appendChild(hiddenInput);
                form.appendChild(buyBtn);
                itemBody.appendChild(form);

                itemDiv.appendChild(itemHeader);
                itemDiv.appendChild(itemBody);
                itemContainer.appendChild(itemDiv);
            });
            
            itemList.appendChild(pagination.cloneNode(true));*/
        }
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