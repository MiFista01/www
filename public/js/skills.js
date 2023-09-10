$(document).ready(function () {
    $("main .hex").click(function (e) { //show text
        e.preventDefault();
        let btn = this
        $(".des h3").text($(btn).text());
        $(".des p").text($($(btn).next()).text());
    });
});