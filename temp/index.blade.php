@extends('layout')
    @section('content')
    <article class="carousel"> <!-- Slideshow -->
        <div class="carousel-inner" id="carousel-inner">
            <h3>Productos Destacados</h2>
        </div>
        <div class="carousel-control left">
            <div class="arrow left"></div>
        </div>
        <div class="carousel-control right">
            <div class="arrow right"></div>
        </div>
        <ol class="carousel-indicators" id="carousel-indicators">
        </ol>
    </article>
    <article class="listing center">
        <h2>Joyería</h2>
        <div id="filters">
            <label>Categoria:</label>
            <select id='combocategorias'>
                <option selected value='0'>Todas</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </select>
            <br>
            <label>Productos a mostrar</label>
			<select id='numproducts'>
				<option selected>10</option>
				<option>20</option>
				<option>35</option>
				<option>50</option>
			</select>
        </div>
        <div id="item-list">
        </div>
    </article>
    <!-- Scripts -->
    <script type="text/javascript" src='{{ asset("assets\js\productsget.js") }}'></script>
    <script type="text/javascript" src='{{ asset("assets\js\index.js") }}'></script>
    @endsection