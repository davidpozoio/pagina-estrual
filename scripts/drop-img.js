let id;

function delay(time){
    return new Promise(resolve=> id = setTimeout(resolve,time*1000));
}

async function animationHeighImgDrop(imgDropValue){ 

    clearTimeout(id);

    heightFit[0] = imgDropValue[0].clientHeight;
    heightFit[1] = imgDropValue[1].clientHeight;
    while(true){

        console.log(heightFit[0]);
        heightFit[0] -= 20;
        heightFit[1] -= 20;

        
        if(heightFit[1]<=0){
            heightFit[1] = 0;
            imgDropValue[1].style.height = "0";
        }

        if(heightFit[0]<=0){
            imgDropValue[0].style.height ="0";
           
            break;
        }


        imgDropValue[0].style.height = heightFit[0]+"px";
        imgDropValue[1].style.height = heightFit[0]+"px";

        await delay(0.001);

    }
}


let img1 = document.querySelectorAll(".img1");
let imgDrop = document.querySelectorAll(".img-content-drop");

let img2 = document.querySelectorAll(".img2");
let img3 = document.querySelectorAll(".img3");

let buttonPressed = false;

let heightFit = [imgDrop[0].clientHeight, imgDrop[1].clientHeight];



img1[0].addEventListener("click",()=>{

    if(mediaQuery700){
        if(buttonPressed == false){
            imgDrop[0].style.height = "fit-content";
            imgDrop[1].style.height = "fit-content";
    
            img2[0].style.animation = "img2-animation 0.5s forwards";
            img3[0].style.animation = "img3-animation 0.5s forwards";
    
            img2[1].style.animation = "img2-animation 0.3s forwards";
            img3[1].style.animation = "img3-animation 0.3s forwards";
            buttonPressed = true;
    
    
        }else{
    
            heightFit[0] = imgDrop[0].clientHeight;
    
            img2[0].style.animation = "img2-animation-reverse 0.5s forwards";
            img3[0].style.animation = "img3-animation-reverse 0.5s forwards";
    
            img2[1].style.animation = "img2-animation-reverse 0.5s forwards";
            img3[1].style.animation = "img3-animation-reverse 0.5s forwards";
    
    
            animationHeighImgDrop(imgDrop);
    
            
    
    
            buttonPressed = false;
        }
    }
    
    



})

img1[1].addEventListener("click",()=>{
    
    if(mediaQuery700){
        if(buttonPressed == false){
            imgDrop[0].style.height = "fit-content";
            imgDrop[1].style.height = "fit-content";
    
            img2[0].style.animation = "img2-animation 0.5s forwards";
            img3[0].style.animation = "img3-animation 0.5s forwards";
    
            img2[1].style.animation = "img2-animation 0.3s forwards";
            img3[1].style.animation = "img3-animation 0.3s forwards";
            buttonPressed = true;
    
    
        }else{
    
            img2[0].style.animation = "img2-animation-reverse 0.5s forwards";
            img3[0].style.animation = "img3-animation-reverse 0.5s forwards";
    
            img2[1].style.animation = "img2-animation-reverse 0.5s forwards";
            img3[1].style.animation = "img3-animation-reverse 0.5s forwards";
    
            animationHeighImgDrop(imgDrop);
    
            buttonPressed = false;
        }
    }





})


let img1SecondRow = document.querySelectorAll(".img1-second-row");
let imgSecondRowDrop = document.querySelectorAll(".img-second-row-drop")

let isImgSecondRowPressed = false;

let img2SecondRow = document.querySelectorAll(".img2-second-row");
let img3SecondRow = document.querySelectorAll(".img3-second-row");

img1SecondRow[0].addEventListener("click",()=>{
    if(mediaQuery700){
        if(isImgSecondRowPressed == false){

            imgSecondRowDrop[0].style.height = "fit-content";
            imgSecondRowDrop[1].style.height = "fit-content";
    
            img2SecondRow[0].style.animation = "drop-img-second-row 0.5s forwards";
            img2SecondRow[1].style.animation = "drop-img-second-row 0.2s forwards";
    
    
            img3SecondRow[0].style.animation = "drop-img-second-row 0.5s forwards";
            img3SecondRow[1].style.animation = "drop-img-second-row 0.2s forwards";
    
            isImgSecondRowPressed = true;
    
        }else{
            img2SecondRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
            img2SecondRow[1].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
    
            img3SecondRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
            img3SecondRow[1].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
            animationHeighImgDrop(imgSecondRowDrop);
    
            isImgSecondRowPressed = false;
    
        }
    }


    
});

img1SecondRow[1].addEventListener("click",()=>{
    if(mediaQuery700){
        if(isImgSecondRowPressed == false){

            imgSecondRowDrop[0].style.height = "fit-content";
            imgSecondRowDrop[1].style.height = "fit-content";
    
            img2SecondRow[0].style.animation = "drop-img-second-row 0.5s forwards";
            img2SecondRow[1].style.animation = "drop-img-second-row 0.2s forwards";
    
    
            img3SecondRow[0].style.animation = "drop-img-second-row 0.5s forwards";
            img3SecondRow[1].style.animation = "drop-img-second-row 0.2s forwards";
    
            isImgSecondRowPressed = true;
    
        }else{
            img2SecondRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
            img2SecondRow[1].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
    
            img3SecondRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
            img3SecondRow[1].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
            animationHeighImgDrop(imgSecondRowDrop);
    
            isImgSecondRowPressed = false;
    
        }
    }

 
    
})


let img1ThirdRow = document.querySelectorAll(".img1-third-row");
let img2ThirdRow = document.querySelectorAll(".img2-third-row");
let img3ThirdRow = document.querySelectorAll(".img3-third-row");

let imgThirdRowDrop = document.querySelectorAll(".img-third-row-drop");

let isImgThirdRowPressed = false;

img1ThirdRow[0].addEventListener("click",()=>{

    if(mediaQuery700){
        if(isImgThirdRowPressed == false){
            imgThirdRowDrop[0].style.height = "fit-content";
            imgThirdRowDrop[1].style.height = "fit-content";
    
            img2ThirdRow[0].style.animation = "drop-img-second-row 0.2s forwards";
            img2ThirdRow[1].style.animation = "drop-img-second-row 0.5s forwards";
    
            img3ThirdRow[0].style.animation = "drop-img-second-row 0.5s forwards";
            img3ThirdRow[1].style.animation = "drop-img-second-row 0.5s forwards";
    
            isImgThirdRowPressed = true;
    
        }else{
            img2ThirdRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
            img2ThirdRow[1].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
            
            img3ThirdRow[1].style.animation = "drop-img-second-row-reverse 0.2s forwards";
            img3ThirdRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
            animationHeighImgDrop(imgThirdRowDrop)
    
            isImgThirdRowPressed = false;
    
        }
    }



})

img1ThirdRow[1].addEventListener("click",()=>{

    if(mediaQuery700){
        if(isImgThirdRowPressed == false){
            imgThirdRowDrop[0].style.height = "fit-content";
            imgThirdRowDrop[1].style.height = "fit-content";
    
            img2ThirdRow[0].style.animation = "drop-img-second-row 0.2s forwards";
            img2ThirdRow[1].style.animation = "drop-img-second-row 0.5s forwards";
    
            img3ThirdRow[0].style.animation = "drop-img-second-row 0.5s forwards";
            img3ThirdRow[1].style.animation = "drop-img-second-row 0.5s forwards";
    
            isImgThirdRowPressed = true;
    
        }else{
            img2ThirdRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
            img2ThirdRow[1].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
            
            img3ThirdRow[1].style.animation = "drop-img-second-row-reverse 0.2s forwards";
            img3ThirdRow[0].style.animation = "drop-img-second-row-reverse 0.5s forwards";
    
            animationHeighImgDrop(imgThirdRowDrop)
    
            isImgThirdRowPressed = false;
    
        }
    }



})




