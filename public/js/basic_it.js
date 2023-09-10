$(document).ready(function () {
    let defense = false
    $(".options_btn").click(function (e) { //btns for parts in page
        e.preventDefault();
        if (!defense){
            let button = this
            $.ajax({
                type: "post",
                url: "/fragment",
                data: {page:$(button).attr("page_name")}, //get name of fragment
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