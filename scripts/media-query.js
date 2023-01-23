let mediaQueryDesktop = window.matchMedia("(min-width: 700px)");
let infoButton = document.querySelector(".whoare-button");
let proAndSliWindow = document.querySelector(".projectable-window-button");
let fixAndSwinWindow = document.querySelector(".fixed-window-button");
let sliAndSwinDoor = document.querySelector(".sliding-door-button");

window.addEventListener("resize",()=>{
    if(mediaQueryDesktop.matches){
        infoButton.innerHTML = "INFORMACIÓN";
        proAndSliWindow.innerHTML = "VENTANAS PROYECTADAS Y CORREDIZAS";
        fixAndSwinWindow.innerHTML = "VENTANAS FIJAS Y BATIENTES";
        sliAndSwinDoor.innerHTML = "PUERTAS CORREDIZAS Y BATIENTES";
    }else{
        infoButton.innerHTML = "¿QUIÉNES SOMOS?";
        proAndSliWindow.innerHTML = "VENTANAS PROYECTADAS";
        fixAndSwinWindow.innerHTML = "VENTANAS FIJAS";
        sliAndSwinDoor.innerHTML = "PUERTAS BATIENTES";
    }
},false)


let globalResize = window.matchMedia("(min-width: 700px)");
let mediaQuery700 = globalResize.matches;


window.addEventListener("resize",()=>{
    
    if(globalResize.matches){
        mediaQuery700 = true;
    }else{
        mediaQuery700 = false;
    }



})


let header = document.querySelector(".first-row-img")
let headerPosition = false;

 window.addEventListener("scroll",()=>{

    if(window.scrollY >=window.scrollY+parseInt(header.getBoundingClientRect().top) && window.scrollY <= window.scrollY + parseInt(header.getBoundingClientRect().bottom) ){
        headerPosition = true;
        console.log(headerPosition)
    }else{
        headerPosition = false;
        console.log(headerPosition)
    }
 })

