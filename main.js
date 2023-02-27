
let skillDorpdown=document.querySelectorAll(".skill-dropdown")
let language=document.querySelector(".language")
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
language.addEventListener("click",showSkills);
