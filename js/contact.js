document.querySelector('#sendBtn').onclick = sendMail;

function sendMail()
{
    try
    {
        var errors = "";
        var form = document.getElementById("formulario");

        // Recollir dades formulari
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        // Validació de dades
        if (name == "")
            errors += "Nombre obligatorio\n";
        if (email == "")
            errors += "Correo obligatorio\n";
        if (message == "")
            errors += "Mensaje obligatorio\n";

        if (errors != "")
            throw(errors);

        //Objecte js amb les dades
        let url = "https://formspree.io/f/xayvgkbv";
        let datos = {
            'name' : name,
            'email' : email,
            'message' : message
        };

        //informar la petición ajax
        let parametres = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
                resposta.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        throw(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        throw("Oops! There was a problem submitting your form");
                    }
                });
            }
        })
        .then(function (resultat)
        {
            form.reset();
            document.getElementById('messages').innerHTML = "Thanks for your submission!";
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