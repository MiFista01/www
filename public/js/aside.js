$(document).ready(function () {
    $(".tabs").toggle(0);
    $(".menu").click(function (e) { 
        e.preventDefault();
        $(".tabs").toggle(200);
    });
    menu_btn(".menu_btn")
});
function menu_btn(obj) {
    $(obj).click(function (e) {
        e.preventDefault();
        let btn = this
        if(sessionStorage.getItem("page") !=$(btn).attr("page_name")){
            $.ajax({
                type: "post",
                url: "/fragment",
                data: {page:$(btn).attr("page_name")},
                dataType: "html",
                success: function (response) {
                    $("main").toggleClass("slideUp");
                    $(".path .btns").empty();
                    if( $(btn).attr("page_name") != "home" && $(".path .btns").find("[page_name='"+$(btn).attr("page_name")+"']")[0] == undefined){
                        let div = document.createElement("div")
                        let text_btn = `<p class="path_btn" type="menu" page_name="`+$(btn).attr("page_name")+`">`+$(btn).text()+`</p>`
                        $(div).html(text_btn);
                        menu_btn($(div).find(".path_btn")[0])
                        $(".path .btns").append(div);
                    }
                    sessionStorage.setItem("page",$(btn).attr("page_name"))
                    sessionStorage.setItem("path",$(".path .btns").html())
                    element = document.getElementById("up")
                    element.scrollIntoView()
                    setTimeout(() => {
                        $("main").empty();
                        $("main").html(response);
                        $("main").toggleClass("slideUp");
                    }, 800);
                }
            });
        }
        
    });
}