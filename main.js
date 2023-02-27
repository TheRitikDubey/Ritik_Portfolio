
let skillDorpdown=document.querySelectorAll(".skill-dropdown")
let language=document.querySelector(".language")
let libraries=document.querySelector(".dropDown-lib")
let tools=document.querySelector(".Tools")
let skill_drop_down=0;
function showSkills() {
    console.log("working");
    if(skill_drop_down===0){
        document.getElementById("myDropdown").style.display = "flex";
        skill_drop_down=1;
    }
    else{
        document.getElementById("myDropdown").style.display = "none";
        skill_drop_down=0;
    }
    console.log(skill_drop_down);
    
    
}

let libraries_drop_down=0;
function showLibraries() {
    console.log("working");
    if(libraries_drop_down===0){
        
        //document.getElementById("mylib").style.transition = " visibility 2s";
        document.getElementById("mylib").style.display = "flex";
        libraries_drop_down=1;
    }
    else{
        document.getElementById("mylib").style.display = "none";
        libraries_drop_down=0;
    }
    
    
}
language.addEventListener("click",showSkills);
libraries.addEventListener("click",showLibraries);
