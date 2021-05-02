
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
var profile = document.querySelector(".profile-header-user");
var displayProfile = document.querySelector(".user-profile");
var arr = document.querySelector(".d-arr");


if (profileToggled === false) {
profile.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
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


//for profile pencil suggestion

var profilePenSuggDis = false;

  function profilePenSugg(){
    var profilePencilHover = document.querySelector("#profile-pencil");
var pencilSugg = document.querySelector("#prof-pen-sugg");

if (profilePenSuggDis === false) {
   profilePencilHover.addEventListener("mouseover", function(){
      pencilSugg.style.display = "block";
   });
   profilePenSuggDis = true;
}
else if (profilePenSuggDis === true){
     profilePencilHover.addEventListener("mouseout", function(){
      pencilSugg.style.display = "none";
    });
   profilePenSuggDis = false;  
}
}

//for the dotted line suggestion

var moreIconSuggDis = false;

  function moreIconSugg(){
    var moreIconHover = document.querySelector(".evince-ng-text .more-icon");
    var moreSugg = document.querySelector(".evince-ng-text #more-icon-sugg");

if (moreIconSuggDis === false) {
   moreIconHover.addEventListener("mouseover", function(){
      moreSugg.style.display = "block";
   });
   moreIconSuggDis = true;
}
else if (moreIconSuggDis === true){
     moreIconHover.addEventListener("mouseout", function(){
      moreSugg.style.display = "none";
    });
   moreIconSuggDis = false;  
}
}

//for the dotted line suggestion

var moreIconFreeSuggDis = false;


  function moreIconFreeSugg(){
    var moreIconFreeHover = document.querySelector(".freelancer .freelancer-text .more-icon");
    var moreFreeSugg = document.querySelector(".freelancer .freelancer-text #more-icon-sugg");

if (moreIconFreeSuggDis === false) {
   moreIconFreeHover.addEventListener("mouseover", function(){
      moreFreeSugg.style.display = "block";
   });
   moreIconFreeSuggDis = true;
}
else if (moreIconFreeSuggDis === true){
     moreIconFreeHover.addEventListener("mouseout", function(){
      moreFreeSugg.style.display = "none";
    });
   moreIconFreeSuggDis = false;  
}
}


var moreIconEduSuggDis = false;


  function moreIconEduSugg(){
    var moreIconEduHover = document.querySelector(".edu .institute .more-icon");
    var moreFreeSugg = document.querySelector(".edu .institute #more-icon-sugg");

if (moreIconEduSuggDis === false) {
   moreIconEduHover.addEventListener("mouseover", function(){
      moreFreeSugg.style.display = "block";
   });
   moreIconEduSuggDis = true;
}
else if (moreIconEduSuggDis === true){
     moreIconEduHover.addEventListener("mouseout", function(){
      moreFreeSugg.style.display = "none";
    });
   moreIconEduSuggDis = false;  
}
}


//to display more opion when dotted line is clicked for evince-ng

var moreOptionDis = false;

  function moreEvOption(){
    var moreIconClick = document.querySelector(".evince-ng-text .more-icon");
    var moreOptionDiv = document.querySelector(".evince-ng-text .more-options");

if (moreOptionDis === false) {
   moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "block";
   });
   moreOptionDis = true;
}
else if (moreOptionDis === true){
     moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "none";
    });
   moreOptionDis = false;  
}
}

//to display more opion when dotted line is clicked for freelancer

var moreOptionDis = false;

  function moreFreeOption(){
    var moreIconClick = document.querySelector(".freelancer-text .more-icon");
    var moreOptionDiv = document.querySelector(".freelancer-text .more-options");

if (moreOptionDis === false) {
   moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "block";
   });
   moreOptionDis = true;
}
else if (moreOptionDis === true){
     moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "none";
    });
   moreOptionDis = false;  
}
}


//to display more opion when dotted line is clicked for education

var moreOptionDis = false;

  function moreEduOption(){
    var moreIconClick = document.querySelector(".edu .institute .more-icon");
    var moreOptionDiv = document.querySelector(".edu .institute .more-options");

if (moreOptionDis === false) {
   moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "block";
   });
   moreOptionDis = true;
}
else if (moreOptionDis === true){
     moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "none";
    });
   moreOptionDis = false;  
}
}



//for personal info pencil suggestion

var pInfoPenSuggDis = false;

  function pInfoPenSugg(){
    var pencilHover = document.querySelector(".personal-info .personal-info-title .pencil");
    var pInfoSugg = document.querySelector("#p-info-pen-sugg");

if (pInfoPenSuggDis === false) {
   pencilHover.addEventListener("mouseover", function(){
      pInfoSugg.style.display = "block";
   });
   pInfoPenSuggDis = true;
}
else if (pInfoPenSuggDis === true){
     pencilHover.addEventListener("mouseout", function(){
      pInfoSugg.style.display = "none";
    });
   pInfoPenSuggDis = false;  
}
}


//remote job toggling

var remoteJobToggle = false;

function remoteJobToggler(){
   var remoteToggle = document.querySelector(".remote-job-img");

   if (remoteJobToggle === false) {
     remoteToggle.addEventListener("click", function(){
       remoteToggle.src = "img/toggle-on.png";
     });
     remoteJobToggle = true;
   }
else if(remoteJobToggle === true){
   remoteToggle.addEventListener("click", function(){
     remoteToggle.src = "img/toggle-off.png";
   });
    remoteJobToggle = false;
}

}


//FOR PERSONALINFO
//if the pencil icon is clicked display the form and the personal-info-links and remove
//personal details div
var personalInfoFormDisplay = false;

function displayPILinksAndForm(){
   var pencilToggle = document.querySelector(".personal-info .personal-info-title .pencil");
   var personalInfoLinks = document.querySelector(".personal-info-links");
   var personalInfoForm = document.querySelector(".personal-info-form");
   var personalDetails = document.querySelector(".personal-details");

// if pencil is clicked on display a form and the above links
	 if(personalInfoFormDisplay === false){
           pencilToggle.addEventListener("click", function(){
           	personalInfoLinks.style.display = "grid";
           	personalInfoForm.style.display = "block";
           	 pencilToggle.style.display = "none";
             personalDetails.style.display = "none";
           });
           personalInfoFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form, personal-links and display pencil.

function removePILinksAndForm(){
	var pencilToggle = document.querySelector(".personal-info .personal-info-title .pencil");
	var personalInfoLinks = document.querySelector(".personal-info-links");
   var personalInfoForm = document.querySelector(".personal-info-form");
   var personalFormLinkOne = document.querySelector(".personal-info-links .link-one");
   var personalDetails = document.querySelector(".personal-details");
//if pencil is clicked on again remove form and links	 
	 if(personalInfoFormDisplay === true) {
	 	 personalFormLinkOne.addEventListener("click", function(){
	 	 	personalInfoLinks.style.display = "none";
	 	 	personalInfoForm.style.display = "none";
	 	 	pencilToggle.style.display = "block";
           personalDetails.style.display = "block";
	 	 });
         personalInfoFormDisplay = false;
	 }
};



//FOR ABOUTME

//if the pencil icon is clicked display the form and the about-me-links
var aboutMeFormDisplay = false;

function displayLinksAndForm(){
   var pencilToggle = document.querySelector(".about-me .pencil");
   var aboutMeLinks = document.querySelector(".about-me-links");
   var aboutMeForm = document.querySelector(".about-me-form");

// if pencil is clicked on display a form and the above links
	 if(aboutMeFormDisplay === false){
           pencilToggle.addEventListener("click", function(){
           	aboutMeLinks.style.display = "grid";
           	aboutMeForm.style.display = "block";
           	 pencilToggle.style.display = "none";

           })
           aboutMeFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form and the about-me-links

function removeLinksAndForm(){
	var pencilToggle = document.querySelector(".about-me .pencil");
	var aboutMeLinks = document.querySelector(".about-me-links");
   var aboutMeForm = document.querySelector(".about-me-form");
   var formLinkOne = document.querySelector(".about-me-links .link-one");
//if pencil is clicked on again remove form and links	 
	 if(aboutMeFormDisplay === true) {
	 	 formLinkOne.addEventListener("click", function(){
	 	 	aboutMeLinks.style.display = "none";
	 	 	aboutMeForm.style.display = "none";
	 	 	pencilToggle.style.display = "block";
	 	 });
         aboutMeFormDisplay = false;
	 }
};



//FOR EXPERIENCE
// if add button is click---display exp-form
var expFormDisplay = false;

function displayExpForm(){
   var addExpToggle = document.querySelector(".add-exp");
   var expForm = document.querySelector(".exp-form");

// if pencil is clicked on display a form and the above links
	 if(expFormDisplay === false){
           addExpToggle.addEventListener("click", function(){
           	  expForm.style.display = "grid";

           })
           expFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form

function removeExpForm(){
	var removeForm = document.querySelector(".exp-update-btn-no");
   var expForm = document.querySelector(".exp-form");
//if pencil is clicked on again remove form and links	 
	 if(expFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	expForm.style.display = "none";
	 	 });
         expFormDisplay = false;
	 }
};


//FOR EDUCATION
// if add button is click---display exp-form
var eduFormDisplay = false;

function displayEduForm(){
   var addEduToggle = document.querySelector(".add-edu");
   var eduForm = document.querySelector(".edu-form");

// if pencil is clicked on display a form and the above links
	 if(eduFormDisplay === false){
           addEduToggle.addEventListener("click", function(){
           	  eduForm.style.display = "block";
           })
           eduFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form

function removeEduForm(){
	var removeForm = document.querySelector(".edu-update-btn-no");
   var eduForm = document.querySelector(".edu-form");
//if pencil is clicked on again remove form and links	 
	 if(eduFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	eduForm.style.display = "none";
	 	 });
         eduFormDisplay = false;
	 }
};



//FOR SKILLS
// if add button is click---display skills-form
var skillsFormDisplay = false;

function displaySkillsForm(){
   var addSkillsToggle = document.querySelector(".skills .plus-sign");
   var skillsLinks = document.querySelector(".skills-links");
   var skillsForm = document.querySelector(".skills-form");
// if pencil is clicked on display a form and the above links
	 if(skillsFormDisplay === false){
           addSkillsToggle.addEventListener("click", function(){
           	addSkillsToggle.style.display = "none";
           	  skillsLinks.style.display = "inline-block";
           	  skillsForm.style.display = "block";

           });
           skillsFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form

function removeSkillsForm(){
	var addSkillsToggle = document.querySelector(".skills .plus-sign");
	var removeForm = document.querySelector(".skills-links .cancel-form");
	var skillsLinks = document.querySelector(".skills-links");
   var skillsForm = document.querySelector(".skills-form");
//if pencil is clicked on again remove form and links	 
	 if(skillsFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	addSkillsToggle.style.display = "inline-block";
	 	 	skillsLinks.style.display = "none";
	 	 	skillsForm.style.display = "none";
	 	 });
         skillsFormDisplay = false;
	 }
};



//FOR LANGUAGES
// if add button is click---display languages-form
var languagesFormDisplay = false;

function displayLanguagesForm(){
   var addLanguagesToggle = document.querySelector(".languages .plus-sign");
   var languagesLinks = document.querySelector(".languages-links");
   var languagesForm = document.querySelector(".languages-form");
   var addLangBtn = document.querySelector(".add-lang");
   var cancelForm = document.querySelector(".cancel-icon");
// if plus button is clicked on display a form and the above links
	 if(languagesFormDisplay === false){
           addLanguagesToggle.addEventListener("click", function(){
           	addLanguagesToggle.style.display = "none";
           	  languagesLinks.style.display = "inline-block";
           	  languagesForm.style.display = "block";
           	  addLangBtn.style.display = "block";
           	  cancelForm.style.display = "block";
           });
           languagesFormDisplay = true;
	 }
};

//if the cancel link is clicked.. set form display to none;
function removeLanguagesForm(){
	var addlanguagesToggle = document.querySelector(".languages .plus-sign");
	var removeForm = document.querySelector(".languages-links .cancel-form");
	var languagesLinks = document.querySelector(".languages-links");
   var languagesForm = document.querySelector(".languages-form");
   var addLangBtn = document.querySelector(".add-lang");
   var cancelForm = document.querySelector(".cancel-icon");
//if cancel button is clicked on again remove form and links	 
	 if(languagesFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	addlanguagesToggle.style.display = "inline-block";
	 	 	languagesLinks.style.display = "none";
	 	 	languagesForm.style.display = "none";
             addLangBtn.style.display = "none";
             cancelForm.style.display = "none";
	 	 });
         languagesFormDisplay = false;
	 }
};

var languagesFormDis = true;
//when cancel or x icon is clicked on
function cancelLanguagesForm(){
   var languagesForm = document.querySelector(".languages-form");
   var cancelForm = document.querySelector(".cancel-icon");
//if cancel button is clicked on again remove form and links	 
	 if(languagesFormDis === true) {
	 	 cancelForm.addEventListener("click", function(){
	 	 	languagesForm.style.display = "none";           
             cancelForm.style.display = "none";
	 	 });
         languagesFormDis = false;
	 }
};


//add language link to display form again
function addLang(){
	 var addLangBtn = document.querySelector(".add-lang");
	 var languagesForm = document.querySelector(".languages-form");
   var cancelForm = document.querySelector(".cancel-icon");
  //if add button is clicked on display form and cancel icon back
	 if(languagesFormDis === false){
      addLangBtn.addEventListener("click", function(){     
        languagesForm.style.display = "block";
         cancelForm.style.display = "block";
   });
       languagesFormDis = true;
   }
};

// var languagesFormAdd = false;
	//seems not to work i will try it later
       // var languagesForm = document.querySelector(".languages-form");
       // var cln = languagesForm.cloneNode(true);
       // var container = document.querySelector(".languages");
       // container.appendChild(cln);

       //when info icon is hover on display title-suggestion
var titleSuggDis = false;
function infoTitleHover(){
      var infoProTitle = document.querySelector(".pro-title .info");
      var titleSuggestion = document.querySelector(".title-suggestion");

    //if you hover on info icon display titleSuggestion
    if(titleSuggDis === false){
    	infoProTitle.addEventListener("mouseover", function(){
    		titleSuggestion.style.display = "block";
    	});
    	titleSuggDis = true;
    } 
    else if(titleSuggDis === true){
    	infoProTitle.addEventListener("mouseout", function () {
    		 titleSuggestion.style.display = "none";
    	});
    	titleSuggDis = false;
    }


}

//for about me
var aboutSuggDis = false;
function aboutInfoHover(){
      var aboutIcon = document.querySelector(".about-info-icon");
      var aboutSuggestion = document.querySelector(".about-me-suggestion");

    //if you hover on info icon display aboutSuggestion
    if(aboutSuggDis === false){
    	aboutIcon.addEventListener("mouseover", function(){
    		aboutSuggestion.style.display = "block";
    	});
    	aboutSuggDis = true;
    } 
    else if(aboutSuggDis === true){
    	aboutIcon.addEventListener("mouseout", function() {
    		  aboutSuggestion.style.display = "none";
    	});
    	aboutSuggDis = false;
    }


}

//for aboutMePencilInfo
var aboutMePenInfoDis = false;
function aboutMePenInfo(){
      var aboutMePen = document.querySelector(".about-me .pencil");
      var aboutMePenInfo = document.querySelector(".about-me .pencil-info");

    //if you hover on info icon display aboutMePenInfo
    if(aboutMePenInfoDis === false){
    	aboutMePen.addEventListener("mouseover", function(){
    		aboutMePenInfo.style.display = "block";
    	});
    	aboutMePenInfoDis = true;
    } 
    else if(aboutMePenInfoDis === true){
    	aboutMePen.addEventListener("mouseout", function() {
    		  aboutMePenInfo.style.display = "none";
    	});
    	aboutMePenInfoDis = false;
    }


}

//input to show red when touchend

function nonEmpty(){
  var nonempty = document.querySelector(".non-empty"); 
  var emptyMsg = document.querySelector(".error-msg");
     	if (nonempty.value === "") {
      nonempty.style.borderColor = "#b83030"; 
     nonempty.style.backgroundColor = "#fff6e1"; 
     nonempty.style.backgroundImage = "url('img/warning-icon.png')";
     nonempty.style.backgroundSize = "5%";
     nonempty.style.backgroundRepeat = "no-repeat";
     nonempty.style.backgroundPosition = "right";
     emptyMsg.style.display = "block";
     return false;
     }
     
  else if(nonempty.value !== ""){
  	 nonempty.style.borderColor = "#0b68e8"; 
     nonempty.style.backgroundColor = "#fff"; 
     nonempty.style.backgroundImage = "url('img/ticked.png')";
     nonempty.style.backgroundSize = "5%";
     nonempty.style.backgroundRepeat = "no-repeat";
     nonempty.style.backgroundPosition = "right";
     emptyMsg.style.display = "none";
     return true;
  }   

 }

function nonInsEmpty(){
  var nonInsempty = document.querySelector(".non-ins-empty"); 
  var emptyInsMsg = document.querySelector(".edu-form .error-ins-msg");
   if (nonInsempty.value === "") {
     nonInsempty.style.borderColor = "#b83030"; 
     nonInsempty.style.backgroundColor = "#fff6e1"; 
     nonInsempty.style.backgroundImage = "url('img/warning-icon.png')";
     nonInsempty.style.backgroundSize = "5%";
     nonInsempty.style.backgroundRepeat = "no-repeat";
     nonInsempty.style.backgroundPosition = "right";
     emptyInsMsg.style.display = "block";
     return false;
 }

  else if(nonInsempty.value !== ""){
      emptyInsMsg.style.display = "none";
      nonInsempty.style.borderColor = "#0b68e8"; 
     nonInsempty.style.backgroundColor = "#fff"; 
     nonInsempty.style.backgroundImage = "url('img/ticked.png')";
     nonInsempty.style.backgroundSize = "5%";
     nonInsempty.style.backgroundRepeat = "no-repeat";
     noneInsmpty.style.backgroundPosition = "right";
     return true;
 }
    }














