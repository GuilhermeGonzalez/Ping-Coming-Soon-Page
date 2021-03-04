

function handleClick() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    document.querySelector(".error").innerHTML ="Please provide a valid email address";

    if(document.querySelector(".input").value == ""){
        document.querySelector(".error").innerHTML = "Whoops! It looks like you forgot to add your email";
        document.querySelector(".input").classList.add("errorInput");
        document.querySelector(".error").classList.remove("unshow");
    }
    else if(emailRegex.test(String(document.querySelector(".input").value).toLowerCase()))
    {
        document.querySelector(".input").classList.remove("errorInput");
        document.querySelector(".error").classList.add("unshow");
    }
    else{
        document.querySelector(".input").classList.add("errorInput");
        document.querySelector(".error").classList.remove("unshow");
    }
}