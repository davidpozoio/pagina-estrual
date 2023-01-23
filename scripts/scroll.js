function detectButton(classButton, sectionName, space){
    let button = document.querySelector("."+classButton);

    button.addEventListener("click",()=>{
        window.scroll({
            top: (window.scrollY + parseInt(document.querySelector("."+sectionName).getBoundingClientRect().top - space) ),

            behavior: "smooth"
        });

        if(mediaQuery700){
            let dropMenu = document.querySelector(".dropdown-menu")
            dropMenu.style.animation = "dropdown-menu-animation-reverse 0.5s forwards";
            isButtonMenuPressed = !isButtonMenuPressed;

        }else{
            let dropMenu = document.querySelector(".dropdown-menu")
            dropMenu.style.animation = "dropdown-menu-animation-reverse 0.5s forwards";
            document.body.style.setProperty("overflow-y","scroll");

            isButtonMenuPressed = !isButtonMenuPressed;
        }

;


    })

}
// funcionalidad de botones del menu desplegable
detectButton("whoare-button","whoare",50);
detectButton("whereare-button","whereare",60);


detectButton("projectable-window-button","projectable-glass", 90);
detectButton("sliding-window-button","sliding-glass",70);
detectButton("fixed-window-button","fixed-glass",70);
detectButton("swining-window-button","swinging-glass",70);


detectButton("swining-door-button","swinging-door",70);
detectButton("sliding-door-button","sliding-door",70);

//funcionalidad de botones inicio y contacto

let starButton = document.querySelector(".start-button");

starButton.addEventListener("click",()=>{
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

let contactButton = document.querySelector(".contact-button");

contactButton.addEventListener("click",()=>{
    window.scroll({
        top: 9999,
        behavior: "smooth"
    });
})


let arrowUp = document.querySelector(".row-header-start");

arrowUp.addEventListener("click",()=>{
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
})

let arrowDown = document.querySelector(".row-header-contact");

arrowDown.addEventListener("click",()=>{
    window.scroll({
        top: 9999,
        behavior: "smooth"
    });
})

