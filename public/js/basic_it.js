$(document).ready(function () {
    let defense = false
    $(".options_btn").click(function (e) { 
        e.preventDefault();
        if (!defense){
            let button = this
            $.ajax({
                type: "post",
                url: "/fragment",
                data: {page:$(button).attr("page_name")},
                dataType: "html",
                success: function (response) {
                    defense = true
                    $(".materials").slideUp(200,()=>{
                        $(".materials").html(response);
                        $(".materials").slideDown(200)
                        defense = false
                    });
                }
            });
        }
    });
});