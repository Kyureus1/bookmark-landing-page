console.log("hey! :)");

const hamburgerButton = document.getElementById("hamburger-button");
const dropdownContent = document.getElementById("dropdown-content");
const closeMenuButton = document.getElementById("close-menu");
const logo = document.getElementById("logo");
const closeB = document.getElementById("close-menu");
const block = document.getElementsByClassName("block");
const answ = document.querySelectorAll(".answer p");
const features = document.getElementById("features");
const linking = document.getElementById("linking");
const faq = document.getElementById("faq");
const footer = document.querySelector("footer");
const landButtons = document.querySelector("#landing-buttons");
const backArrow = document.querySelectorAll(".arrow path");
const arrow = document.querySelectorAll(".arrow");
const input = document.querySelector("#inputs input");
const submit = document.querySelector("#inputs button");
const validityState = input.validity;
const frames = document.querySelectorAll("#frame input");
const frameChange = document.querySelector("#slides .inner");

function dropdown() {
    if(dropdownContent.style.display == "flex") {
        logo.style.display = "block";
    }
    else {
        logo.style.display = "none";
        features.style.display = "none";
        linking.style.display = "none";
        faq.style.display = "none";
        footer.style.display = "none";
        hamburgerButton.style.display = "none";
        landButtons.style.display = "none";
        dropdownContent.style.display = "flex"; 
    }
}
function close() {
    logo.style.display = "block";
    dropdownContent.style.display = "none";
    hamburgerButton.style.display = "flex";
    features.style.display = "block";
    linking.style.display = "flex";
    faq.style.display = "flex";
    footer.style.display = "block";
    hamburgerButton.style.display = "flex";
    landButtons.style.display = "flex";  
}

function answDropdown(event) {
    for(i = 0; i<=3; i++) {
        if(block[i].contains(event.target) && answ[i].style.display == "none") {
            answ[i].style.display = "flex";
            backArrow[i].style = "stroke: hsl(0, 94%, 66%)";
            arrow[i].style = "transform: rotate(180deg)";
        }
        else {
            answ[i].style.display = "none";
            backArrow[i].style = "stroke: hsl(231, 69%, 60%)";
            arrow[i].style = "transform: rotate(360deg)";
        }
    }
}
for(i = 0; i<=3; i++) {
    block[i].addEventListener('click', answDropdown);
}
submit.addEventListener('click', function(event) {
    if(validityState.typeMismatch) {
        input.setCustomValidity("you have to introduce a valid email");
        input.reportValidity();
        input.value = "";
    }
    else {
        input.value = "";
    }
});
frames.forEach(frame => {
    frame.addEventListener('click', function() {
        if(frame.id == "frame1") {
            frameChange.style = "margin-left: 0";
            console.log("done!");
        }
        else if(frame.id == "frame2") {
            frameChange.style = "margin-left: -100%";
        }
        else{
            frameChange.style = "margin-left: -200%";
            console.log("eeeeee");
        }
    }); 
});
closeB.addEventListener('click', close);
hamburgerButton.addEventListener('click', dropdown);

