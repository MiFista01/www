$(document).ready(function () {
    $(".opt").toggle(0);
    $(".color").click(function (e) { 
        e.preventDefault();
        $(".light").css("background-image", "url(imgs/background/light"+$(this).attr("id")+".png)");
    });
    $("#btn_color").click(function (e) { 
        e.preventDefault();
        $(".opt").toggle(100);
    });
    $(".up").click(function (e) { 
        e.preventDefault();
        let element = document.getElementById("up")
        element.scrollIntoView()
    });
    $(".down").click(function (e) { 
        e.preventDefault();
        let element = document.getElementById("down")
        element.scrollIntoView()
    });
});
