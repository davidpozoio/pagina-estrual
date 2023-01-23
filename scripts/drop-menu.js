let menu = document.querySelector(".material-symbols-outlined");
let dropMenu = document.querySelector(".dropdown-menu")
let hideScreen = document.querySelector(".hidden-screen");

let isButtonMenuPressed = false;

menu.addEventListener("click",()=>{

    if(mediaQuery700){
        if(isButtonMenuPressed==false){
            dropMenu.style.animation = "dropdown-menu-animation 0.5s forwards";
            document.body.style.setProperty("overflow-y","scroll");

            isButtonMenuPressed = true;
        }else{
            dropMenu.style.animation = "dropdown-menu-animation-reverse 1s forwards";
            document.body.style.setProperty("overflow-y","scroll");

            isButtonMenuPressed = false;
        }
    }else{
        dropMenu.style.animation = "dropdown-menu-animation 1s forwards";
        document.body.style.setProperty("overflow-y","hidden")

        isButtonMenuPressed = true;
    }



})

let exitButton = document.querySelector(".exit-menu-button");

exitButton.addEventListener("click",()=>{

    dropMenu.style.animation = "dropdown-menu-animation-reverse 1s forwards";
    document.body.style.setProperty("overflow-y","scroll");

})



