
function Submit(e){
    e.preventDefault();
let fName=document.getElementById("firstName").value ;
let fname_error=document.getElementById("fname-error") ;
let lName=document.getElementById("lastName").value ;
let lname_error=document.getElementById("lname-error") ;
let password=document.getElementById("password").value ;
let pass_error=document.getElementById("password-error") ;
let email=document.getElementById("email").value ;
let email_error=document.getElementById("email-error") ;


    fname_error.textContent = "";
    lname_error.textContent = "";

    email_error.textContent = "";
    pass_error.textContent = "";

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let flag = regex.test(email);
    if(fName==""){
        fname_error.textContent="First Name cann't be empty";
        document.getElementById("firstName").classList.toggle("error");
     document.getElementsByClassName("fname-error")[0].style.display="block"

    }
    else{
     document.getElementsByClassName("fname-error")[0].style.display="none"
     document.getElementById("firstName").style.borderColor='green'

    }
    if(lName==""){
        lname_error.textContent="Last Name cann't be empty";
        document.getElementById("lastName").classList.toggle("error");
     document.getElementsByClassName("lname-error")[0].style.display="block"

    }else{
     document.getElementsByClassName("lname-error")[0].style.display="none"
     document.getElementById("lastName").style.borderColor='green'
    }
    if(password==""){
        pass_error.textContent="Password cann't be empty";
        document.getElementById("password").classList.toggle("error");
     document.getElementsByClassName("pass-error")[0].style.display="block"

    }
    else{
        document.getElementsByClassName("pass-error")[0].style.display="none"
        document.getElementById("password").style.borderColor='green'
    }
    if(email==""){
        email_error.textContent="Email cann't be empty ";
        document.getElementById("email").classList.add("error");
     document.getElementsByClassName("email-error")[0].style.display="block"

    }else if(!flag){
    email_error.textContent="Looks like this is not an email";
     document.getElementsByClassName("email-error")[0].style.display="block"
     document.getElementById("email").classList.add("error");
     }
else{
        document.getElementById("email").style.borderColor='green'
    document.getElementsByClassName("email-error")[0].style.display="none"

}
// document.getElementById("password").onchange(e){
//    e.style.borderColor='green';

// }
}