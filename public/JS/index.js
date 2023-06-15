const right = document.querySelector(".desFront");
const left = document.querySelector(".progFront");
const rightTrg = document.querySelector(".tringger-right");
const leftTrg = document.querySelector(".tringger-left");
const rightBlc = document.querySelector(".block-right");
const leftBlc = document.querySelector(".block-left");
const rightOvr = document.querySelector(".overlay-right");
const leftOvr = document.querySelector(".overlay-left");
const logo = document.querySelector(".index-wraper");

// 

const progH = document.querySelector(".prog-h");
const progP = document.querySelector(".prog-p");
const desH = document.querySelector(".des-h");
const desP = document.querySelector(".des-p");

//

rightTrg.addEventListener("mouseover",slideLeft);
rightTrg.addEventListener("mouseout",backLeft);

leftTrg.addEventListener("mouseover",slideRight);
leftTrg.addEventListener("mouseout",backRight);

function slideLeft() {
    if (isIndexMenuOp) {
        indexMenuTogler();
    }
    left.style.transform = 'translateX(-100%)';
    leftBlc.classList.remove("noBlock");
    leftBlc.classList.add("block");
    leftOvr.classList.remove("noBlock");
    leftOvr.classList.add("block");
    logo.style.transform = 'translate(-25vw)';
    indexHeading.style.transform = 'translateY(-150%)';
    helper.style.transform = 'translateY(5em)';
    desH.style.transform = 'translateX(-42vw) rotate(-90deg)';
    desP.style.transform = 'translateX(0)';
    progH.style.transform = 'translateX(-150%) rotate(90deg)';
}
function backLeft() {
    left.style.transform = 'translateX(0)';
    setTimeout(() => {
        leftBlc.classList.add("noBlock");
        leftBlc.classList.remove("block");
    }, 1000);
    leftOvr.classList.add("noBlock");
    leftOvr.classList.remove("block");
    logo.style.transform = 'translate(0)';
    indexHeading.style.transform = 'translateY(0)';
    desH.style.transform = 'translateX(0) rotate(-90deg)';
    desP.style.transform = 'translateX(150%)';
    progH.style.transform = 'translateX(0) rotate(90deg)';
}

function slideRight() {
    if (isIndexMenuOp) {
        indexMenuTogler();
    }
    right.style.transform = 'translateX(100%)';
    rightBlc.classList.remove("noBlock");
    rightBlc.classList.add("block");
    rightOvr.classList.remove("noBlock");
    rightOvr.classList.add("block");
    logo.style.transform = 'translate(25vw)';
    indexHeading.style.transform = 'translateY(-150%)';
    helper.style.transform = 'translateY(5em)';
    progH.style.transform = 'translateX(42vw) rotate(90deg)';
    progP.style.transform = 'translateX(0)';
    desH.style.transform = 'translateX(150%) rotate(-90deg)';
}
function backRight() {
    right.style.transform = 'translateX(0)';
    setTimeout(() => {
        rightBlc.classList.add("noBlock");
        rightBlc.classList.remove("block");
    }, 1000);
    rightOvr.classList.add("noBlock");
    rightOvr.classList.remove("block");
    logo.style.transform = 'translate(0)';
    indexHeading.style.transform = 'translateY(0)';
    progH.style.transform = 'translateX(0) rotate(90deg)';
    progP.style.transform = 'translateX(-150%)';
    desH.style.transform = 'translateX(0) rotate(-90deg)';
}

const circle = document.querySelector(".index-logo");
const circleW = document.querySelector(".index-logo-wraper");


circleW.addEventListener("click", indexMenuTogler);

const indexMenu1 = document.querySelector(".imw1");
const indexMenu2 = document.querySelector(".imw2");
const indexHeading = document.querySelector(".index-heading");
const helper = document.querySelector(".click");

let isIndexMenuOp = false

function indexMenuTogler() {
    if (!isIndexMenuOp) {
        indexMenu1.classList.add("index-appear");
        indexMenu2.classList.add("index-appear");
        indexHeading.style.transform = 'translateY(-150%)';
        setTimeout(() => {
            indexMenu1.classList.add("index-slide");
            indexMenu2.classList.add("index-slide");
        }, 20);
        circle.style.rotate = '-20deg';
        logo.style.transform = 'translateY(-5vmin)';
        helper.style.transform = 'translateY(5em)';
        
        progH.style.transform = 'translateX(-150%) rotate(90deg)';
        desH.style.transform = 'translateX(150%) rotate(-90deg)';
        
        leftOvr.classList.remove("noBlock");
        leftOvr.classList.add("block");
        rightOvr.classList.remove("noBlock");
        rightOvr.classList.add("block");

        isIndexMenuOp = true;
    }
    else {
        indexMenu1.classList.remove("index-slide");
        indexMenu2.classList.remove("index-slide");
        indexHeading.style.transform = 'translateY(0)';
        setTimeout(() => {
            indexMenu1.classList.remove("index-appear");
            indexMenu2.classList.remove("index-appear");
        }, 500);
        circle.style.rotate = '0deg';
        logo.style.transform = 'translateY(0)';
        
        progH.style.transform = 'translateX(0) rotate(90deg)';
        desH.style.transform = 'translateX(0) rotate(-90deg)';
        
        leftOvr.classList.add("noBlock");
        leftOvr.classList.remove("block");
        rightOvr.classList.add("noBlock");
        rightOvr.classList.remove("block");

        isIndexMenuOp = false;
    }
}