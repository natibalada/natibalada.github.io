document.querySelector('#deleteBtn').onclick = deleteUser;

function deleteUser() 
{
    if (confirm("Seguro que desea darse de baja?\nEsta acción es irreversible!"))
    {
        try
        {
            var errors = "";

            // Obtenir token
            let token = document.querySelector("input[name=_token]").value;

            // Recollir dades formulari
            let id = document.getElementById('userid').value.trim();

            // Validació de dades
            if (id == "" || isNaN(id) || id <= 0)
                errors += "ID no informado, no numerico o inferior o igual a 0\n";

            if (errors != "")
                throw(errors);

            //informar la petición ajax
            let url = '/users/' + id;
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
                    window.location.reload();
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
}