<p class="formlogin" style="font-size:1em">Hola {{ $user->name }}!</p><br>
@if ($user->name == 'Administrador')
<a href="{{ url('/backend') }}" id="backendLink"><button id="backendLink">Backend</button></a>
@endif
<a href="{{ url('/usuario') }}" id="settingsLink"><button id="settingsBtn">Mis datos</button></a>
<form id="formlogout">
    @csrf
    <input class="formlogout button" type="button" id="logout" name="logout" value="Logout" >
</form>
