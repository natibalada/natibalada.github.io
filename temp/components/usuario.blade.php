@extends('layout')
    @section('content')
    <article id="settings">
        <form id="formulario">
        @csrf
            <div class="container">
                <h1>Datos de cuenta</h1>
			    <input type="hidden" name="userid" id="userid" value='{{ $user->id ?? null }}'/>
                <hr>

                <h3>Información básica</h3>

                <label for="name"><b>Nombre</b></label><br>
                <input type="text" name="name" id="name" value='{{ $user->name ?? null }}' required><br>

                <label for="email"><b>Email</b></label><br>
                <input type="text" name="email" id="email" value='{{ $user->email ?? null }}' disabled><br>

                <label for="password"><b>Contraseña</b></label><br>
                <input type="password" name="password" id="password" value='{{ $user->password ?? null }}' required><br>

                <label for="passwordRepeat"><b>Repita Contraseña</b></label><br>
                <input type="password" name="passwordRepeat" id="passwordRepeat"><br>

			    <label for="address"><b>Dirección</b></label><br>
                <input type="text" maxlength="255" name="address" id="address" value='{{ $user->address ?? null }}' required/><br>

                <label for="postalCode"><b>Código Postal</b></label><br>
                <input type="text" maxlength="5" name="postalCode" id="postalCode" value='{{ $user->postal_code ?? null }}' required/><br>

                <h3>Información de pago</h3>

                <label for="paymentType"><b>Tipo de pago</b></label><br>
                <select id="paymentType" name="paymentType">
                    <option value="1" selected>Seleccione</option>
                    <option value="2">Banco</option>
                </select><br><br>

                <label for="cardNumber"><b>Número de tarjeta</b></label><br>
                <input type="text" name="cardNumber" id="cardNumber" value='{{ $user->card_number ?? null }}' required/><br>

                <label for="cardExpiry"><b>Fecha de caducidad</b></label><br>
                <input type="date" name="cardExpiry" id="cardExpiry" value='{{ $user->card_expires ?? null }}' required/><br>

                <label for="cardCVV"><b>CVV</b></label><br>
                <input type="text" maxlength="3" name="cardCVV" id="cardCVV" value='{{ $user->card_cvv ?? null }}' required style="width:20%;"/><br>

                <label for="points"><b>Total puntos</b></label><br>
                <input type="text" maxlength="5" name="points" id="points" value='{{ $user->points ?? null }}' disabled style="width: 20%;"/><br>
                <hr>

                <input type="button" class="modifyBtn" name="modifyBtn" id="modifyBtn" value="Modificar datos">
                <input type="button" class="deleteBtn" name="deleteBtn" id="deleteBtn" value="Darme de baja">
                <span id='messages'></span>
            </div>
        </form>
    </article>
    <!-- Scripts -->
    <script type="text/javascript" src='{{ asset("assets/js/userupdate.js") }}'></script>
    <script type="text/javascript" src='{{ asset("assets/js/userdelete.js") }}'></script>
    @endsection