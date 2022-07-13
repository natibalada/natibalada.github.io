loadCart();

function loadCart()
{
    try
    {
        //informar la petición ajax
        let url = '/cart';
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
                [].slice.call(document.getElementsByClassName('cartItemsCount')).forEach(function ( element ) {
                    element.innerHTML = resultat.cartItems.length;
                });
                document.querySelector('#cartTotal').innerHTML = resultat.cartTotal;

                var cartItems = document.querySelector('#cart-items');
                cartItems.innerHTML = "";

                // Set the products to show
                resultat.cartItems.forEach(product => {
                    let itemDiv = document.createElement("div");
                    itemDiv.className = "item";
                    let itemHeader = document.createElement("div");
                    itemHeader.className = "item-header";

                    let img = document.createElement("img");
                    img.src = product.image;
                    itemHeader.appendChild(img);

                    let itemBody = document.createElement("div");
                    itemBody.className = "item-body";
                    let name = document.createElement("p");
                    name.innerHTML = product.name;
                    let price = document.createElement("p");
                    price.className = "price";
                    price.innerHTML = product.price + "€";
                    itemBody.appendChild(name);
                    itemBody.appendChild(price);

                    let form = document.createElement("form");
                    let hiddenInput = document.createElement("input");
                    hiddenInput.setAttribute("type", "hidden");
                    hiddenInput.setAttribute("name", "productid");
                    hiddenInput.setAttribute("id", "productid");
                    hiddenInput.setAttribute("value", product.id);
                    
                    let deleteBtn = document.createElement("input");
                    deleteBtn.setAttribute("type", "button");
                    deleteBtn.setAttribute("class", "deleteFromCartBtn");
                    deleteBtn.setAttribute("name", "deleteFromCartBtn");
                    deleteBtn.setAttribute("id", "deleteFromCartBtn");
                    deleteBtn.setAttribute("value", "Quitar del carrito");
                    deleteBtn.onclick = function ()
                    {
                        deleteFromCart(this.closest('form').querySelector('input[type="hidden"]').value);
                    };

                    form.appendChild(hiddenInput);
                    form.appendChild(deleteBtn);
                    itemBody.appendChild(form);

                    itemDiv.appendChild(itemHeader);
                    itemDiv.appendChild(itemBody);
                    cartItems.appendChild(itemDiv);
                });

                // Check if show cart badge
                if (resultat.cartItems.length <= 0)
                    $('.cart-badge').hide();
                else
                    $('.cart-badge').show();

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

function addToCart(id)
{
    try
    {
        //informar la petición ajax
        let url = '/cart/' + id;
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
                loadCart();
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

function deleteFromCart(id)
{
    try
    {
        // Obtenir token
        let token = document.querySelector("input[name=_token]").value;

        //informar la petición ajax
        let url = '/cart/' + id;
        let parametres = {
			headers: {
				'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
			},
            method: "DELETE"
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
                loadCart();
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