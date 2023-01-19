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




let whoButton = document.querySelector(".whoare-button");
let whoPosition = document.querySelector(".whoare").getBoundingClientRect().top;



whoButton.addEventListener("click",()=>{

    console.log(whoPosition);

    window.scroll({
        top: whoPosition,
        behavior: "smooth"
    });

    dropMenu.style.animation = "dropdown-menu-animation-reverse 1s forwards";
    document.body.style.setProperty("overflow-y","scroll");

})

let whereButton = document.querySelector(".whereare-button");
let wherePosition = document.querySelector(".whereare").getBoundingClientRect().top;


whereButton.addEventListener("click",()=>{

    console.log(wherePosition)

    window.scroll({
        top: wherePosition,
        behavior: "smooth"
    });

    dropMenu.style.animation = "dropdown-menu-animation-reverse 1s forwards";
    document.body.style.setProperty("overflow-y","scroll");

})

let projectableButton = document.querySelector(".projectable-window-button");


projectableButton.addEventListener("click",()=>{

    let projectablePosition = document.querySelector(".projectable-glass").getBoundingClientRect().top;
    console.log(projectablePosition.top);


    window.scroll({
        top: projectablePosition.top,
        behavior: "smooth"
    })
})

console.log(projectableButton);