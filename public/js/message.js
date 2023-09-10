$(document).ready(function () {
    $("#message").submit(function (e) { 
        e.preventDefault();
        let form = this //get the form and its inputs
        $(".answer").empty();
        let img = document.createElement("img") //create an element to show wait
        img.src = "imgs/other/load.gif"  //load the gif
        $(".answer").append(img); // append element
        $(".form button").attr("disabled", true); //disable submit button
        $.ajax({
            type: "post",
            url: "/message",
            data: {name:form.name.value, email:form.email.value, subject:form.subject.value, message:form.message.value},  //send data
            dataType: "json",
            success: function (response) {
                let text = document.createElement("p") //create text for response
                text.style.fontSize = "20px"
                if(response.status == 1){
                    //clear inputs
                    form.name.value = ""
                    form.email.value = ""
                    form.subject.value = ""
                    form.message.value = ""
                    //clrear inputs
                    $(".answer").empty();
                    text.textContent = "Message sent"
                    text.style.color = "green"
                    $(".answer").append(text);  //append if respone is positive
                }else{
                    $(".answer").empty();
                    text.textContent = "Message not sent"
                    text.style.color = "rgb(157, 1, 1)"
                    $(".answer").append(text); //append if responde is negative
                }
                $(".form button").attr("disabled", false); //anabel button
            }
        });
    });
});