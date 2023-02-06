$(document).ready(function () {
    $("#message").submit(function (e) { 
        e.preventDefault();
        let form = this
        $(".answer").empty();
        let img = document.createElement("img")
        img.src = "imgs/other/load.gif"
        $(".answer").append(img);
        $(".form button").attr("disabled", true);
        $.ajax({
            type: "post",
            url: "/message",
            data: {name:form.name.value, email:form.email.value, subject:form.subject.value, message:form.message.value},
            dataType: "json",
            success: function (response) {
                let text = document.createElement("p")
                text.style.fontSize = "20px"
                if(response.status == 1){
                    form.name.value = ""
                    form.email.value = ""
                    form.subject.value = ""
                    form.message.value = ""
                    $(".answer").empty();
                    text.textContent = "Message sent"
                    text.style.color = "green"
                    $(".answer").append(text);
                }else{
                    $(".answer").empty();
                    text.textContent = "Message not sent"
                    text.style.color = "rgb(157, 1, 1)"
                    $(".answer").append(text);
                }
                $(".form button").attr("disabled", false);
            }
        });
    });
});