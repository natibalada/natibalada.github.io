@extends('layout')
    @section('content')
    <article id="register">
        <form id="formulario">
        @csrf
            <div class="container">
                <h1>Registrar</h1>
			    <p><b style="text-decoration: underline;">Todos</b> los campos son obligatorios.</p>
                <hr>

                <h3>Información básica</h3>

                <label for="name"><b>Nombre</b></label><br>
                <input type="text" name="name" id="name" required><br>

                <label for="email"><b>Email</b></label><br>
                <input type="email" name="email" id="email" required><br>

                <label for="password"><b>Contraseña</b></label><br>
                <input type="password" name="password" id="password" required><br>

                <label for="passwordRepeat"><b>Repita Contraseña</b></label><br>
                <input type="password" name="passwordRepeat" id="passwordRepeat" required><br>

			    <label for="address"><b>Dirección</b></label><br>
                <input type="text" maxlength="255" name="address" id="address" required/><br>

                <label for="postalCode"><b>Código Postal</b></label><br>
                <input type="text" maxlength="5" name="postalCode" id="postalCode" required/><br>

                <h3>Información de pago</h3>

                <label for="paymentType"><b>Tipo de pago</b></label><br>
                <select id="paymentType" name="paymentType">
                    <option value="1" selected>Seleccione</option>
                    <option value="2">Banco</option>
                </select><br><br>

                <label for="cardNumber"><b>Número de tarjeta</b></label><br>
                <input type="text" name="cardNumber" id="cardNumber" required/><br>

                <label for="cardExpiry"><b>Fecha de caducidad</b></label><br>
                <input type="date" name="cardExpiry" id="cardExpiry" required/><br>

                <label for="cardCVV"><b>CVV</b></label><br>
                <input type="text" maxlength="3" name="cardCVV" id="cardCVV" required style="width:20%;"/><br>
                <hr>

                <input type="button" class="registerBtn" name="registerBtn" id="registerBtn" value="Registrar">
            </div>
        </form>
    </article>
    <!-- Scripts -->
    <script type="text/javascript" src='{{ asset("assets/js/userregister.js") }}'></script>
    @endsection