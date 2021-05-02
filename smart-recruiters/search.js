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
var searchToggled = false;

function searchToggle(){
var search = document.querySelector(".search-header-user");
var displaysearch = document.querySelector(".user-search");
var arr = document.querySelector(".d-arr");


if (searchToggled === false) {
search.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
    displaysearch.style.display = "block";
    arr.src = "img/up-arrow.png";
})
searchToggled = true;
}

else if (searchToggled === true) {
search.addEventListener("click", function(){
    displaysearch.style.display = "none";
    arr.src = "img/down-arrow.png";
})
searchToggled = false;
}

};


var listOfEmpDis = false;

function listOfEmp(){
	var tofClick = document.querySelector(".tof");
	var lof = document.querySelector(".list-of-emp");

	if (listOfEmpDis === false) {
       tofClick.addEventListener("click", function(){
       	  lof.style.display = "block";
       });
       listOfEmpDis = true;
 	}
 	else if(listOfEmpDis === true){
 		tofClick.addEventListener("click", function(){
 			lof.style.display = "none";
 		});
 		listOfEmpDis = false;
 	}
}











