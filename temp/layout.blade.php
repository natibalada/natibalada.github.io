<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#">
<head>
    <!-- Meta tags -->
    <meta charset="UTF-8"/>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <meta name="HandheldFriendly" content="true"/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name="robots" content="noindex, nofollow"/>

    <!-- Basic info -->
    <meta name="author" content="Dana Gomez Balada"/>
    <title>Bisuteria nblady</title>
    <link rel="icon" type="image/x-icon" href='{{ asset("assets/img/logos/logo.png") }}'/>

    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href='{{ asset("assets/libs/normalize.min.css") }}'/>
    <link rel="stylesheet" type="text/css" href='{{ asset("assets/libs/fontawesome-free-6.0.0-web\css\all.min.css") }}'/>
    <link rel="stylesheet" type="text/css" href='{{ asset("assets/css/style.css") }}'/>

    <!-- Js scripts -->
    <script type="text/javascript" src='{{ asset("assets/libs/jquery-3.6.0.min.js") }}'></script>
    <script type="text/javascript" src='{{ asset("assets/libs/fontawesome-free-6.0.0-web/js/all.min.js") }}'></script>
    <script type="text/javascript" src='{{ asset("assets/js/script.js") }}'></script>
</head>
<body>
    <div id="container">
        <header>
            <nav>
                <a href="{{ url('/') }}" id="logo">
                    <img src='{{ asset("assets\img\logos\logo.png") }}' alt="Logo"/>
                </a>
                <div class="nav-container">
                    <a href="{{ url('/') }}" id="homeBtn" class="center">
                        <div class="nav-img fa fa-house"></div>
                        <div class="nav-text">Inicio</div>
                    </a>
                    <a href="{{ url('/contacto') }}" id="contactBtn" class="center">
                        <div class="nav-img fa fa-envelope"></div>
                        <div class="nav-text">Contacto</div>
                    </a>
                    <div id="cartBtn" class="center">
                        <div class="nav-img fa fa-shopping-cart"></div>
                        <div class="nav-text">Carrito</div>
                        <span class="cart-badge"><span class="cartItemsCount"></span></span>
                    </div>
                    <div id="loginBtn" class="center">
                        <div class="nav-img fa fa-user"></div>
                        <div class="nav-text">Cuenta</div>
                    </div>
                    <div id="menuBtn" class="center">
                        <div class="nav-img fa fa-bars"></div>
                        <div class="nav-text">Menú</div>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <section id="content">
                @yield('content')
            </section>
            <aside>
                <div id="side-container">
                    <article class="cart center">
                        <h2>Carrito</h2>
                        <div class="info">
                            <p>Artículos: <span class="cartItemsCount"></span></p>
                            <p>Importe: <span id ="cartTotal"></span>€</p>
                        </div>
                        <div class="items" id="cart-items">
                        </div>
                        <div class="checkout">
                        <form id="formcheckout">
                        @csrf
                            <input class="formcheckout button" type="button" id="checkoutBtn" name="checkoutBtn" value="Check Out" >
                        </form>
                        </div>
                    </article>
                    <article class='login center'><!-- Login form -->
                        <h2>Cuenta</h2>
                        @include('components.'.$loginMenu)
                    </article>
                </div>
            </aside>
        </main>
        <footer>
            <span>Creada por Dana Gomez Balada</span>
        </footer>
    </div>
<script type="text/javascript" src='{{ asset("assets/js/cart.js") }}'></script>
<script type="text/javascript" src='{{ asset("assets/js/orderPlace.js") }}'></script>
<script type="text/javascript" src='{{ asset("assets/js/userlogin.js") }}'></script>
</body> 
</html>