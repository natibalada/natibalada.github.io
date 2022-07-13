<p class="formlogin" style="font-size:1em">Identifiquese o dese de alta como nuevo usuario</p><br>
<form id="formlogin">
    @csrf
    <input class="formlogin" type="email" name="loginEmail" id="loginEmail" placeholder="Correo" required><br>
    <input class="formlogin" type="password" name="loginPassword" id="loginPassword" placeholder="Contraseña" required><br><br>

    <input class="formlogin" type="button" id="login" name="login" value="Login" >
</form>
<hr>
<p>No eres usuario/a? <a href="{{ url('/registro') }}" id="registro">Regístrate</a>!</p>