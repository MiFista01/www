$(document).ready(function () {
    main_btn(".main_btn")
});
function main_btn(obj) {
    $(obj).click(function (e) { 
        e.preventDefault();
        let btn = this
        if(sessionStorage.getItem("page") !=$(btn).attr("page_name")){ //ckeck page name and btn attribute
            $.ajax({
                type: "post",
                url: "/fragment",
                data: {page:$(btn).attr("page_name")},
                dataType: "html", //get the HTML format of the sent page
                success: function (response) {
                    $("main").toggleClass("slideUp");
                    if( $(btn).attr("page_name") != "MiFista" && $(".path .btns").find("[page_name='"+$(btn).attr("page_name")+"']")[0] == undefined){
                        let div = document.createElement("div")
                        let text_btn = `<span>/</span> <p class="path_btn" page_name="`+$(btn).attr("page_name")+`">`+$(btn).text()+`</p>`
                        $(div).html(text_btn);
                        main_btn($(div).find(".path_btn")[0])
                        $(".path .btns").append(div);
                    }
                    if($(".path .btns").find("[page_name='"+$(btn).attr("page_name")+"']")[0] != undefined){
                        $($($(".path .btns").find("[page_name='"+$(btn).attr("page_name")+"']")[0]).parent()).nextAll('div').remove();
                    }
                    sessionStorage.setItem("page",$(btn).attr("page_name"))
                    sessionStorage.setItem("path",$(".path .btns").html())
                    let element = document.getElementById("up")
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