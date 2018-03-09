$("#cerrar").on("click", function(){
    $("#banner").remove()
});

$("img").on("click", function(){
    $(this).replaceWith("<div class='texto'>Al carrito</div><img class='img_carro' src='img/carro.jpg'>")
});