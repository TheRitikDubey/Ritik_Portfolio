
let skillDorpdown=document.querySelectorAll(".skill-dropdown")
let language=document.querySelector(".language")
let libraries=document.querySelector(".dropDown-lib")
let tools=document.querySelector(".Tools")
let education=document.querySelector(".Edu-section")

let work=document.querySelector(".work-section")

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

let tools_drop_down=0;
function showTools() {
    console.log("working");
    if(tools_drop_down===0){
        //document.getElementById("mylib").style.transition = " visibility 2s";
        document.getElementById("mytool").style.display = "flex";
        tools_drop_down=1;
    }
    else{
        document.getElementById("mytool").style.display = "none";
        tools_drop_down=0;
    }  
}
let curr_section=0;
function change_to_student_section(){
    
    document.getElementById("curr-edu").style.display="grid"
    
    document.getElementById("proffesional-section").style.display="none"

    education.style.color="rgb(109 40 217)";

    work.style.color="gray";
        
}

function change_to_pro_section(){
    
    document.getElementById("curr-edu").style.display="none"
    
    document.getElementById("proffesional-section").style.display="flex"

    work.style.color="rgb(109 40 217)";

    education.style.color="gray";
    
}

language.addEventListener("click",showSkills);
libraries.addEventListener("click",showLibraries);
tools.addEventListener("click",showTools);
education.addEventListener("click",change_to_student_section)

work.addEventListener("click",change_to_pro_section)
