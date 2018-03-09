$("document").ready(function () {
    $("#anuncio").text("¡CLICK! para cambiar de color")
        .width("700px")
        .height("700px")
        .hide()
        .fadeIn(3000)
});

let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]

$("#anuncio").on("click", function(){
    let color = colores[Math.floor(Math.random() * colores.length)]
    $(this).css("background-color", color);    
})