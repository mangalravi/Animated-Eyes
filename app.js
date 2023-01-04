

let pupils = document.getElementsByClassName("pupil");
let pupilArr = Array.from(pupils);

// pupils movements
let pupilStartPoint =  -100;
let pupilRange = 200;


//mouse x position
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

//mouse y position

let mouseYEndPoint = window.innerHeight ;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue  =  currentXPosition / mouseXRange;
    // console.log("X = " + fracXValue);



    currentYPosition = event.clientY;
   fracYValue = currentYPosition / mouseYEndPoint;
    //    console.log("Y = " + fracYValue);

    let pupilXCurrentPosition = pupilStartPoint + (fracXValue * pupilRange);
    let pupilYCurrentPosition = pupilStartPoint + (fracYValue * pupilRange);

    pupilArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilXCurrentPosition}px , ${pupilYCurrentPosition}px) `;
         
    })

}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    let mouseXRange = mouseXEndPoint - mouseXStartPoint;


    
     mouseYEndPoint = window.innerHeight ;
}


window.addEventListener("mousemove",mouseMove);
window.addEventListener("resize",windowResize);