console.log("hey! :)");

const hamburgerButton = document.getElementById("hamburger-button");
const dropdownContent = document.getElementById("dropdown-content");
const closeMenuButton = document.getElementById("close-menu");
const logo = document.getElementById("logo");
const closeB = document.getElementById("close-menu");
const block = document.getElementsByClassName("block");
const answ = document.querySelectorAll(".answer p");

function dropdown() {
    if(dropdownContent.style.display == "flex") {
        logo.style.display = "block";
    }
    else {
        logo.style.display = "none";
        dropdownContent.style.display = "flex";
        hamburgerButton.style.display = "none";  
    }
}
function close() {
    logo.style.display = "block";
    dropdownContent.style.display = "none";
    hamburgerButton.style.display = "flex";  
}

function answDropdown(event) {
    for(i = 0; i<=3; i++) {
        if(block[i].contains(event.target) && answ[i].style.display == "none") {
            answ[i].style.display = "flex";
        }
        else {
            answ[i].style.display = "none";
        }
    }
}
for(i = 0; i<=3; i++) {
    block[i].addEventListener('click', answDropdown);
}
closeB.addEventListener('click', close);
hamburgerButton.addEventListener('click', dropdown);

