//for email
 var email = document.querySelector(".email");
 var errorMsg = document.querySelector(".error-msg");

if(email.value === ""){
   email.addEventListener("click", function(){
    email.style.borderColor = "#b83030";
    email.style.backgroundColor = "#fff6e1";
   errorMsg.style.display = "block"
  });
   }

//for password
  var pwd = document.querySelector(".pwd");
    pwd.addEventListener("click", function(){
    pwd.style.borderColor = "#b83030";
    pwd.style.backgroundColor = "#fff6e1";

    })



//checks if firstname, lastname has a certain text value
function validation(){
var email = document.querySelector(".email").value;
var signupForm = document.querySelector(".signin-form");

if (email === "adebari.olalekan.oluwaseun@gmail.com") {
    signupForm.action = 'home.html';
    return true;
}
else{
  signupForm.action = 'sign-in.html';
  return false;

}

}