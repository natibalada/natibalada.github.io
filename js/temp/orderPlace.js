document.getElementById('checkoutBtn').onclick = checkout;

function checkout()
{
    try
    {
		// Obtenir token
		let token = document.querySelector("input[name=_token]").value;

        //informar la petición ajax
        let url = '/checkout';
        let parametres = {
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-TOKEN': token
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
                alert(resultat.resposta);
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