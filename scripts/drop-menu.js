let menu = document.querySelector(".material-symbols-outlined");
let dropMenu = document.querySelector(".dropdown-menu")


menu.addEventListener("click",()=>{

    dropMenu.style.animation = "dropdown-menu-animation 1s forwards";
    document.body.style.setProperty("overflow-y","hidden")

})

let exitButton = document.querySelector(".exit-menu-button");

exitButton.addEventListener("click",()=>{

    dropMenu.style.animation = "dropdown-menu-animation-reverse 1s forwards";
    document.body.style.setProperty("overflow-y","scroll");


})



