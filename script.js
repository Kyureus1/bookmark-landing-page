console.log("hey! :)");

const hamburgerButton = document.getElementById("hamburger-button");
const dropdownContent = document.getElementById("dropdown-content");
const closeMenuButton = document.getElementById("close-menu");
const logo = document.getElementById("logo");
const closeB = document.getElementById("close-menu");

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

closeB.addEventListener('click', close);
hamburgerButton.addEventListener('click', dropdown);

