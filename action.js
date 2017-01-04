
// Fill in <main> with divs
for(var a = 0; a < 5200; a++) {
    $("main").append("<div></div>");
}


// Prevent default div drag
$("div").ondragstart = function () { return false; };
$("main").ondragstart = function () { return false; };


// Clear board funtionality
$("button").click(function() {
    $("div").css({ "background":"transparent"});
});


// Mouse press and drag to draw
$(window).mousedown( function() {
    $("div").on("mouseenter", function() {
        $(this).css({ "background":"black"});
    });
});
$(window).mouseup( function() {
    $("div").off();
});
