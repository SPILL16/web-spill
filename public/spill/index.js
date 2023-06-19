window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||window.opera);
    return check;
};

if (mobileCheck) {
    window.location.href="/spill/about/";
}

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