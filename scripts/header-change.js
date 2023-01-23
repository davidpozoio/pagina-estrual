function changeHeader(row, text1, text2){
    let rowHeader = document.querySelector(".row-header");
    let firstRow = document.querySelector("."+row);
    let secondRow = document.querySelector(".second-row-img");
    let thirdRow = document.querySelector(".third-row-img");

    document.querySelector(".row-text1").innerHTML = text1;
    document.querySelector(".row-text2").innerHTML = text2;
    
    window.addEventListener("scroll",()=>{
    
       if(window.scrollY >=window.scrollY+parseInt(firstRow.getBoundingClientRect().top) && window.scrollY <= window.scrollY + parseInt(firstRow.getBoundingClientRect().bottom) ){
            
            if(mediaQuery700){
                document.querySelector(".row-text1").innerHTML = "VENTANAS PROYECTADAS";
                document.querySelector(".row-text2").innerHTML = "VENTANAS CORREDIZAS";

                rowHeader.style.display = "block";

                document.querySelector(".row-text1").style.animation = "transparentAppear 1s forwards";
                document.querySelector(".row-text2").style.animation = "transparentAppear 1s forwards";

            }else{
                rowHeader.style.display = "none";
            }

            

        }else if(window.scrollY >=window.scrollY+parseInt(secondRow.getBoundingClientRect().top) && window.scrollY <= window.scrollY + parseInt(secondRow.getBoundingClientRect().bottom) ){
                if(mediaQuery700)
                {
                    document.querySelector(".row-text1").innerHTML = "VENTANAS FIJAS";
                    document.querySelector(".row-text2").innerHTML = "VENTANAS BATIENTES";

                    rowHeader.style.display = "block"

                    document.querySelector(".row-text1").style.animation = "transparentAppear 1s forwards";
                    document.querySelector(".row-text2").style.animation = "transparentAppear 1s forwards";


                }else{
                    rowHeader.style.display = "none";
                }
            
        }else if(window.scrollY >=window.scrollY+parseInt(thirdRow.getBoundingClientRect().top) && window.scrollY <= window.scrollY + parseInt(thirdRow.getBoundingClientRect().bottom - 100) ){
                if(mediaQuery700)
                {
                    document.querySelector(".row-text1").innerHTML = "PUERTAS CORREDIZAS";
                    document.querySelector(".row-text2").innerHTML = "PUERTAS BATIENTES";

                    rowHeader.style.display = "block"

                    document.querySelector(".row-text1").style.animation = "transparentAppear 1s forwards";
                    document.querySelector(".row-text2").style.animation = "transparentAppear 1s forwards";

                }else{
                    rowHeader.style.display = "none";
                }

        }else rowHeader.style.display = "none";

        


    })    
}


changeHeader("first-row-img","VENTANAS PROYECTADAS","VENTANAS CORREDIZAS");

