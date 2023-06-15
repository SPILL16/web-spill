const loadingBar = document.querySelector('.-wraper');
loadingBar.style.setProperty('--width', "100%");

setTimeout(() => {
    window.location.href = window.history.back();
}, 10000);

let oyen = document.querySelector(".oren");

let count = 9;

const cd = () => {
    setTimeout(() => {
        let countS = "" + count;
        oyen.innerText = countS;
        if (count > 0) {
            count--;
            cd();
        }
     }, 1000);
 }

 cd();