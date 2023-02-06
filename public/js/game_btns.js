$(document).ready(function () {
    $("#play").click(function (e) { 
        e.preventDefault();
        $("#game").attr("src", $(this).attr("game_src"));
    });
    $("#stop").click(function (e) { 
        e.preventDefault();
        $("#game").removeAttr("src");
    });
});