$(document).ready(function() {

    $("#menuButton").mouseenter(function() {
        $("#menuButton").click();
    });

    $("#navbarMobile").mouseleave(function() {
        if($("#menuButton").is(":hidden") == false) {
            $("#menuButton").click();
        }
   });
    
    $("#panelAbout").onclick(function() {
        $("#panelAbout").fadeOut();
    })


});
