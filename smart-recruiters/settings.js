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
var settingToggled = false;

function settingToggle(){
var setting = document.querySelector(".setting-header-user");
var displaysetting = document.querySelector(".user-setting");
var arr = document.querySelector(".d-arr");


if (settingToggled === false) {
setting.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
    displaysetting.style.display = "block";
    arr.src = "img/up-arrow.png";
})
settingToggled = true;
}

else if (settingToggled === true) {
setting.addEventListener("click", function(){
    displaysetting.style.display = "none";
    arr.src = "img/down-arrow.png";
})
settingToggled = false;
}

};
