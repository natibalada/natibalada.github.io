document.querySelector('#modifyBtn').onclick = updateUser;

function updateUser() 
{
    console.log("updating");
    try
	{
		var errors = "";

		// Obtenir token
		let token = document.querySelector("input[name=_token]").value;

		// Recollir dades formulari
        let id = document.getElementById('userid').value.trim();
		let name = document.getElementById('name').value.trim();
		let email = document.getElementById('email').value.trim();
		let password = document.getElementById('password').value.trim();
		let passwordRepeat = document.getElementById('passwordRepeat').value.trim();
		let address = document.getElementById('address').value.trim();
		let postalCode = document.getElementById('postalCode').value.trim();

		let paymentType = document.getElementById('paymentType').value.trim();
		let cardNumber = document.getElementById('cardNumber').value.trim();
		let cardExpiry = document.getElementById('cardExpiry').value.trim();
		let cardCVV = document.getElementById('cardCVV').value.trim();

		// Validació de dades
        if (id == "" || isNaN(id) || id <= 0)
            errors += "ID no informado, no numerico o inferior o igual a 0\n";
        if (name == "")
			errors += "Nombre obligatorio\n";
		if (email == "")
			errors += "Correo obligatorio\n";
		
		// Validació contrasenya
		if (password == "" || passwordRepeat == "")
			errors += "Contraseña obligatoria\n";
		if (password != passwordRepeat)
			errors += "Contraseña repetida incorrecta\n";
		if (!(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.length >= 8))
			errors += "La contraseña debe tener 8 o más caracteres y contener minúsculas, mayúsculas y números\n";

		if (address == "")
			errors += "Dirección obligatoria\n";
		if (postalCode == "" || isNaN(postalCode))
			errors += "Codigo postal obligatorio y numérico\n";
		
		if (paymentType == "")
			errors += "Tipo de pago obligatorio\n";
		if (cardNumber == "" || isNaN(cardNumber))
			errors += "Número de tarjeta obligatorio y numérico\n";
		if (cardExpiry == "")
			errors += "Fecha de caducidad obligatoria\n";
		if (cardCVV == "" || isNaN(cardCVV))
			errors += "CVV obligatorio y numérico\n";

		if (errors != "")
			throw(errors);

		//Objecte js amb les dades
		let datos = {
            'name' : name,
            'email' : email,
            'password' : password,
            'address' : address,
            'postal_code' : postalCode,
            'payment_type' : paymentType,
            'card_number' : cardNumber,
            'card_expires' : cardExpiry,
            'card_cvv' : cardCVV
		};

		//informar la petición ajax
		let url = '/users/' + id;
		let parametres = {
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-TOKEN': token
			},
			method: "PUT",
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
                //window.location.reload();
                document.getElementById('messages').innerHTML = resultat.resposta;
			}
			else
				throw(resultat.resposta+'\n'+resultat.codi);
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