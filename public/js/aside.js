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
        let btn = this // get the pressed button
        if(sessionStorage.getItem("page") !=$(btn).attr("page_name")){ //check button attribute
            $.ajax({
                type: "post",
                url: "/fragment",
                data: {page:$(btn).attr("page_name")}, //send button attribute
                dataType: "html", //get the HTML format of the sent page
                success: function (response) {
                    $("main").toggleClass("slideUp"); //use slideUp class
                    $(".path .btns").empty(); // clear div
                    if( $(btn).attr("page_name") != "home" && $(".path .btns").find("[page_name='"+$(btn).attr("page_name")+"']")[0] == undefined){
                        let div = document.createElement("div") //create element for div ".path .btns"
                        let text_btn = `<p class="path_btn" type="menu" page_name="`+$(btn).attr("page_name")+`">`+$(btn).text()+`</p>` //text for element
                        $(div).html(text_btn); // add text in element
                        menu_btn($(div).find(".path_btn")[0]) //add functions
                        $(".path .btns").append(div); //append element
                    }
                    sessionStorage.setItem("page",$(btn).attr("page_name"))  //save page name
                    sessionStorage.setItem("path",$(".path .btns").html())  //save path structure
                    element = document.getElementById("up") //get element (header)
                    element.scrollIntoView() // scroll to top
                    setTimeout(() => {
                        $("main").empty(); // clear main
                        $("main").html(response); // add respone in main
                        $("main").toggleClass("slideUp"); //return the element back by removing the class
                    }, 800);
                }
            });
        }
        
    });
}