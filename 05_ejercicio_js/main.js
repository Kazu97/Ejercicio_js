$("document").ready(function(){
    $("div").hide()
});

$(document).on("click", function(){
    $("div").show()
    $("h1").hide()
});

$("img").hover(
    function () {
        $(this).css("width", 300);
    },
    function () {
        $(this).css("width", 250);
    }
);
