$(document).ready(function () {
    $(".options_btn").click(function (e) { 
        e.preventDefault();
        let button = this
        $.ajax({
            type: "post",
            url: "/fragment",
            data: {page:$(button).attr("page_name")},
            dataType: "html",
            success: function (response) {
                $(".materials").slideUp(1000,()=>{
                    $(".materials").html(response);
                    $(".materials").slideDown(1000)
                });
            }
        });
    });
});