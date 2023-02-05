var menuButtonStatus=false;
var menuButtonVissibility=false;

var navBarMenu=document.getElementById("menuButton");

footer_setDate();

function navBarMenu_onClick(){
    
    var sectionLink=document.getElementById("sectionLink");
    sectionLink.classList.toggle("section_navbar_links_toggle");

}

function footer_setDate(){

    const footerDate=document.getElementById("sectionDate")
    const currentDate=new Date().getFullYear();
    footerDate.innerHTML=currentDate;

}