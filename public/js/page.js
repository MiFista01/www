$(document).ready(function () {
    if(sessionStorage.getItem("page") == null){
        sessionStorage.setItem("page","home")
    }
    $.ajax({ //get pagefrom session storage
        type: "post",
        url: "/fragment",
        data: {page:sessionStorage.getItem("page")},
        dataType: "html",
        success: function (response) {
            $("main").empty();
            $("main").html(response);
        }
    });
    if(sessionStorage.getItem("path") != null){ //insert in div all paths
        let btns = document.createElement("div")
        $(btns).html(sessionStorage.getItem("path"));
        for (i of $(btns).children()){
            $($(i).find("p")).click(function (e) { 
                e.preventDefault();
                let btn = this
                $.ajax({
                    type: "post",
                    url: "/fragment",
                    data: {page:$(btn).attr("page_name")},
                    dataType: "html",
                    success: function (response) {
                        $("main").toggleClass("slideUp");
                        if( $(btn).attr("page_name") != "MiFista" && $(".path .btns").find("[page_name='"+$(btn).attr("page_name")+"']")[0] == undefined){
                            let div = document.createElement("div")
                            let text_btn = `<span>/</span> <p class="path_btn" page_name="`+$(btn).attr("page_name")+`">`+$(btn).text()+`</p>`
                            $(div).html(text_btn);
                            main_btn($(div).find(".path_btn")[0])
                            $(".path .btns").append(div);
                        }
                    }
                });
            });
            $(".path .btns").append(i);
        }
    };
    $(document).scroll(function () { 
        sessionStorage.setItem("scroll",$(document).scrollTop())
    });
    if (sessionStorage.getItem("scroll") != null){
        window.scroll({
            top: sessionStorage.getItem("scroll")+'px',
            left: 0+'px',
            behavior: 'auto'
          });
    }
});