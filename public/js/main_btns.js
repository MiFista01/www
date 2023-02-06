$(document).ready(function () {
    $(".main_btn").click(function (e) { 
        e.preventDefault();
        let button = this
        $.ajax({
            type: "post",
            url: "/fragment",
            data: {page:$(button).attr("page_name")},
            dataType: "html",
            success: function (response) {
                $("main").toggleClass("slideUp");
                let element = document.getElementById("up")
                element.scrollIntoView()
                setTimeout(() => {
                    $("main").empty();
                    $("main").html(response);
                    $("main").toggleClass("slideUp");
                }, 800);
            }
        });
    });
});