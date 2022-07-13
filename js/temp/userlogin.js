window.onload = function ()
{
    if (document.getElementById("login"))
        document.querySelector('#login').onclick = loginUser;
    else
        document.querySelector('#logout').onclick = logoutUser;
};

function loginUser() 
{
    try
    {
		// Obtenir token
		let token = document.querySelector("input[name=_token]").value;
		
        let email = document.getElementById('loginEmail').value.trim();
        let password = document.getElementById('loginPassword').value.trim();

        if (email == "" || password == "")
            throw("Correo y contraseña obligatorios");
        
		//Objecte js amb les dades
		let datos = {
			'email' : email,
			'password' : password
		};

        //informar la petición ajax
        let url = '/users/login';
        let parametres = {
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-TOKEN': token
			},
            method: "POST",
			body: JSON.stringify(datos)
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
                window.location.reload();
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

function logoutUser() 
{
    try
    {
		// Obtenir token
		let token = document.querySelector("input[name=_token]").value;
        
        //informar la petición ajax
        let url = '/users/logout';
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
                window.location.reload();
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