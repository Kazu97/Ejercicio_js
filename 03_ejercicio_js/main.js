// Imagen 1
$("#elem1").on("mouseover", function(){
    $("img").attr("src", "img/arbol.jpg");    
})
$("#elem1").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");    
})
$("li").on("mouseover", function(){
    $(this).addClass("destacar");    
})
$("li").on("mouseout", function(){
    $(this).removeClass("destacar");    
})


// Imagen 2
$("#elem2").on("mouseover", function(){
    $("img").attr("src", "img/lago.jpg");    
})
$("#elem2").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");    
})

// Imagen 3
$("#elem3").on("mouseover", function(){
    $("img").attr("src", "img/rio.jpg");    
})
$("#elem3").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");    
})
$("#elem3").on("mouseover", function(){
    $("#elem3").addClass("destacar");    
})
$("#elem3").on("mouseout", function(){
    $("#elem3").removeClass("destacar");    
})


// Imagen 4
$("#elem4").on("mouseover", function(){
    $("img").attr("src", "img/sol.jpg");    
})
$("#elem4").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");    
})
$("#elem4").on("mouseover", function(){
    $("#elem4").addClass("destacar");    
})
$("#elem4").on("mouseout", function(){
    $("#elem4").removeClass("destacar");    
})