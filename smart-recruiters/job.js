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
var jobToggled = false;

function jobToggle(){
var job = document.querySelector(".job-header-user");
var displayjob = document.querySelector(".user-job");
var arr = document.querySelector(".d-arr");


if (jobToggled === false) {
job.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
    displayjob.style.display = "block";
    arr.src = "img/up-arrow.png";
})
jobToggled = true;
}

else if (jobToggled === true) {
job.addEventListener("click", function(){
    displayjob.style.display = "none";
    arr.src = "img/down-arrow.png";
})
jobToggled = false;
}

};


//For MObile
var extFormDis = false;

function plusAddForm(){
   var plusaddExtForm = document.querySelector(".plus-add");
   var showExtForm = document.querySelector(".add-ext-form");

// if plus or add external job button is clicked on display a form 
	 if(extFormDis === false){
           plusaddExtForm.addEventListener("click", function(){
           	  plusaddExtForm.style.color = "#848484";
           	  plusaddExtForm.style.backgroundColor = "#ececec";
           	  plusaddExtForm.style.border = "1px solid #ececec";
           	  plusaddExtForm.style.cursor = "none";
           	  showExtForm.style.display = "block";
           });
           extFormDis = true;
	 }
};

//if the show less or cancel link is clicked.. remove the form

function removeExtForm(){
	var cancelExtForm = document.querySelector(".btn-one");
	var plusaddExtForm = document.querySelector(".add-form");
    var showExtForm = document.querySelector(".add-ext-form");
//if pencil is clicked on again remove form and links	 
	 if(extFormDis === true) {
	 	 cancelExtForm.addEventListener("click", function(){
	 	 	 plusaddExtForm.style.color = "#fff";
	 	 	plusaddExtForm.style.backgroundColor = "#0b68e8";
	 	 	plusaddExtForm.style.border = "1px solid #0b68e8";
	 	 	plusaddExtForm.style.cursor = "pointer";
	 	 	 showExtForm.style.display = "none";
	 	 });
         extFormDis = false;
	 }
};


var extFormDis = false;

function displayExtForm(){
   var addExtForm = document.querySelector(".add-form");
   var showExtForm = document.querySelector(".add-ext-form");

// if plus or add external job button is clicked on display a form 
	 if(extFormDis === false){
           addExtForm.addEventListener("click", function(){
           	  addExtForm.style.color = "#848484";
           	  addExtForm.style.backgroundColor = "#ececec";
           	  addExtForm.style.border = "1px solid #ececec";
           	  addExtForm.style.cursor = "none";
           	  showExtForm.style.display = "block";
           });
           extFormDis = true;
	 }
};

//if the show less or cancel link is clicked.. remove the form

function removeExtForm(){
	var cancelExtForm = document.querySelector(".btn-one");
	var addExtForm = document.querySelector(".add-form");
    var showExtForm = document.querySelector(".add-ext-form");
//if pencil is clicked on again remove form and links	 
	 if(extFormDis === true) {
	 	 cancelExtForm.addEventListener("click", function(){
	 	 	 addExtForm.style.color = "#fff";
	 	 	addExtForm.style.backgroundColor = "#0b68e8";
	 	 	addExtForm.style.border = "1px solid #0b68e8";
	 	 	addExtForm.style.cursor = "pointer";
	 	 	 showExtForm.style.display = "none";
	 	 });
         extFormDis = false;
	 }
};


var showMoreInputDis = false;

function displayMoreInputs(){
   var showMore = document.querySelector(".show-more");
   var moreInputs = document.querySelector(".more-inputs");

// if pencil is clicked on display a form and the above links
	 if(showMoreInputDis === false){
           showMore.addEventListener("click", function(){
           	  showMore.style.display = "none";
           	  moreInputs.style.display = "block";
           });
           showMoreInputDis = true;
	 }
};

//if the show less or cancel link is clicked.. remove the form

function removeMoreInputs(){
	var showLess = document.querySelector(".show-less");
	var showMore = document.querySelector(".show-more");
    var moreInputs = document.querySelector(".more-inputs");
//if pencil is clicked on again remove form and links	 
	 if(showMoreInputDis === true) {
	 	 showLess.addEventListener("click", function(){
	 	 	showMore.style.display = "block";
	 	 	 moreInputs.style.display = "none";
	 	 });
         showMoreInputDis = false;
	 }
};


var toolTipDis = false;
function toolTipInfo(){
      var logoHover = document.querySelector(".logo");
      var toolTip = document.querySelector(".tooltip");

    //if you hover on info icon display toolTip
    if(toolTipDis === false){
    	logoHover.addEventListener("mouseover", function(){
    		toolTip.style.display = "block";
    	});
    	toolTipDis = true;
    } 
    else if(toolTipDis === true){
    	logoHover.addEventListener("mouseout", function() {
    		  toolTip.style.display = "none";
    	});
    	toolTipDis = false;
    }
}


var toolTipTwoDis = false;

function toolTipTwoInfo(){
      var logoHover = document.querySelector(".logo-two");
      var toolTip = document.querySelector(".tooltip-two");

    //if you hover on info icon display toolTip
    if(toolTipTwoDis === false){
    	logoHover.addEventListener("mouseover", function(){
    		toolTip.style.display = "block";
    	});
    	toolTipTwoDis = true;
    } 
    else if(toolTipTwoDis === true){
    	logoHover.addEventListener("mouseout", function() {
    		  toolTip.style.display = "none";
    	});
    	toolTipTwoDis = false;
    }
}

var scrollDivDis = false;

function scrollDivClick(){
      var saved = document.querySelector("#saved");
      var myApp = document.querySelector("#my-app");
      var scrollDiv = document.querySelector(".scroll-div");
      var scrollDivApp = document.querySelector(".scroll-div-application");
   

    //if you hover on info icon display myApp
    if(scrollDivDis === false){
    	saved.addEventListener("click", function(){
    		saved.style.borderBottom = "4px solid #0b68e8";
    		myApp.style.borderBottom = "none";
    		scrollDiv.style.display = "block";
            scrollDivApp.style.display = "none";
    	});
    	scrollDivDis = true;
    } 
}

var scrollDivAppDis = false;

function scrollDivAppClick(){
      var saved = document.querySelector("#saved");
      var myApp = document.querySelector("#my-app");
      var scrollDiv = document.querySelector(".scroll-div");
      var scrollDivApp = document.querySelector(".scroll-div-application");
   

    //if you hover on info icon display myApp
    if( scrollDivAppDis === false){
    	myApp.addEventListener("click", function(){
    		myApp.style.borderBottom = "4px solid #0b68e8";
    		saved.style.borderBottom = "none";
    		scrollDivApp.style.display = "block";
            scrollDiv.style.display = "none";
    	});
    	 scrollDivAppDis = true;
    } 
}