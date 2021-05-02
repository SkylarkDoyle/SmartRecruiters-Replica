 // <!--  Script for input bg-color and outline --> 
 	function firstNameTouched(){
 	var firstName = document.querySelector(".first");
 		firstName.style.borderColor = "#b83030";
 		firstName.style.backgroundColor = "#fff6e1";

 }
  function lastNameTouched(){
  var lastName = document.querySelector(".last");
    lastName.style.borderColor = "#b83030";
    lastName.style.backgroundColor = "#fff6e1";

 }
  function emailTouched(){
  var email = document.querySelector(".email");
    email.style.borderColor = "#b83030";
    email.style.backgroundColor = "#fff6e1";

 }
  function pwdTouched(){
  var pwd = document.querySelector(".pwd");
    pwd.style.borderColor = "#b83030";
    pwd.style.backgroundColor = "#fff6e1";

 }

//checks if firstname, lastname has a certain text value
function validation(){
var firstName = document.querySelector(".first").value;
var lastName = document.querySelector(".last").value;
var signupForm = document.querySelector(".signup-form");

if (firstName.length === 7 || lastname.length === 8) {
    signupForm.action = 'home.html';
    return true;
}
else{
  signupForm.action = 'sign-up.html';
  return false;

}

}


//for password validation
function pwdVal(){
var pwd = document.querySelector(".pwd").value;
var pwdReq = document.querySelector(".pwd-req");

if (pwd) {
     pwdReq.style.display = "block";
}else{
    pwdReq.style.display = "none";
}
}


