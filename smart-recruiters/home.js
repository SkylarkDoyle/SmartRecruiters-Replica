//code for the bell link
var notificationDiv = false;

function bellToggle(){
var bell = document.querySelector(".bellImg");
var notiDiv = document.querySelector(".notification");

if (notificationDiv === false) {
bell.addEventListener("click", function(){
    notiDiv.style.display = "block";
})
notificationDiv = true;
}

else if (notificationDiv === true) {
bell.addEventListener("click", function(){
    notiDiv.style.display = "none";
})
notificationDiv = false;
}

};


//code for user-profile toggling
var profileToggled = false;

function profileToggle(){
var profile = document.querySelector(".home-header-user");
var displayProfile = document.querySelector(".user-profile");
var arr = document.querySelector(".d-arr");


if (profileToggled === false) {
profile.addEventListener("click", function(){
    displayProfile.style.display = "block";
    arr.src = "img/up-arrow.png";
})
profileToggled = true;
}

else if (profileToggled === true) {
profile.addEventListener("click", function(){
    displayProfile.style.display = "none";
    arr.src = "img/down-arrow.png";
})
profileToggled = false;
}

};


