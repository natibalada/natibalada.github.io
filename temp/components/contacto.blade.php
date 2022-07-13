@extends('layout')
    @section('content')
    <article id="contact">
        <div class="contacto">
            <h2>CONTACTO</h2>
            <p>Los campos marcados con * son obligatorios.</p><br>
            <form id="formulario">
            @csrf
                <label for="name"><b>Nombre: *</b></label><br>
                <input type="text" name="name" id="name" value='{{ $user->name ?? null }}' required><br>

                <label for="email"><b>Email: *</b></label><br>
                <input type="email" name="email" id="email" value='{{ $user->email ?? null }}' required><br>

                <label for="telephone"><b>Teléfono:</b></label><br>
                <input type="tel" name="telephone" id="telephone"><br>

                <label for="country"><b>Country</b></label><br>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select><br><br>

                <label for="message"><b>Mensaje: *</b></label><br>
                <textarea id="message" name="message" placeholder="Introduzca aquí su mensaje" style="height:200px"></textarea><br><br>

                <span id='messages'></span><br>

                <input type="button" class="sendBtn" name="sendBtn" id="sendBtn" value="Enviar"><br><br>
            </form>
            <hr>
        </div>
    </article>
    <!-- Scripts -->
    <script type="text/javascript" src='{{ asset("assets/js/contact.js") }}'></script>
    @endsection