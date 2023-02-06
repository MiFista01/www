$(document).ready(function () {
    if(sessionStorage.getItem("path") == null){
        sessionStorage.setItem("path","home")
    }$.ajax({
        type: "post",
        url: "/fragment",
        data: {page:sessionStorage.getItem("path")},
        dataType: "html",
        success: function (response) {
            $("main").empty();
            $("main").html(response);
        }
    });
});