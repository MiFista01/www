$(document).ready(function () {
    $("#play").click(function (e) { //play game in frame
        e.preventDefault();
        $("#game").attr("src", $(this).attr("game_src"));
    });
    $("#stop").click(function (e) { //stop game
        e.preventDefault();
        $("#game").removeAttr("src");
    });
});