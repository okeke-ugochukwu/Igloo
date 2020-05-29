function collectNamee() {
    Name = document.getElementById("Name").value;

    if (Name == ""){
        document.getElementById("verify2").style.display = "block";
        }   
    else  {
        document.getElementById("page0").style.display = "none";
        document.getElementById("page1").style.display = "block";
    }
}
function collectName() {
    CheckmdleName = "success";
    var mdleName = document.getElementById("mdleName").value;

    if (mdleName == "")  {
        document.getElementById("verify").style.display = "block";
        }
    else if (mdleName == CheckmdleName) {
    document.getElementById("verify").style.display = "none"
    document.getElementById("q1").style.display = "block";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    }
    else {
    document.getElementById("q1b").style.display = "block";
    document.getElementById("q1").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    }
}
function collectColor() {
    if (document.getElementById("black").checked) {
        document.getElementById("q2").style.display = "block";
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
        
    }
    else {
    document.getElementById("q2b").style.display = "block";
    document.getElementById("q2").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    }
    
}
function collectFood() {
    if (document.getElementById("soup").checked) {
        document.getElementById("q3").style.display = "block";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "block";
        
    }
    else {
    document.getElementById("q3b").style.display = "block";
    document.getElementById("q3").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
    }  
}
function collectDrink() {
    if (document.getElementById("laCasera").checked) {
        document.getElementById("q4").style.display = "block";
        document.getElementById("page4").style.display = "none";
        document.getElementById("page5").style.display = "block";
        
    }
    else {
    document.getElementById("q4b").style.display = "block";
    document.getElementById("q4").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
    }  
}
function collectMovie() {
        document.getElementById("resultName").innerHTML = Name;
    if (document.getElementById("Sci-Fi").checked) {
        document.getElementById("q5").style.display = "block";
        document.getElementById("page5").style.display = "none";
        document.getElementById("page6").style.display = "block";
        
    }
    else {
    document.getElementById("q5b").style.display = "block";
    document.getElementById("q5").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "block";
    }  
}

