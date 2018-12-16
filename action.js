
// Fill in <main> with .pixels
for(var counter = 0; counter < 5200; counter++) {
    $("main").append("<div class='pixel'></.pixel>");
}


// Prevent default .pixel drag
$("main").ondragstart = function () { return false; };
$(".pixel").ondragstart = function () { return false; };


// Clear board funtionality
$("#clear-btn").click(function() {
    $(".pixel").css({ "background":"transparent"});
});


// Mouse press and drag to draw
$(window).mousedown( function() {
    $(".pixel").on("mouseenter", function() {
        $(this).css({ "background":"black"});
    });
});
$(window).mouseup( function() {
    $(".pixel").off();
});


/* Change Background */
// Array of images
var images = ["highway.gif", "in-town.gif", "sail-in-city.gif", "watering-shop.gif"];
var imgIndex = -1;

// Cycle through images on click of button in header
$("#change-btn").click( function() {
    imgIndex++;

    if(imgIndex > images.length - 1) {
        imgIndex = 0;
    }

    //Apply selected images to body's background
    $("body").css({ "background-image":"url(img/" + images[imgIndex] + ")" });
});
