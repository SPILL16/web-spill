const loadingBar = document.querySelector('.-wraper');
loadingBar.style.setProperty('--width', "100%");

setTimeout(() => {
    window.location.href = window.history.back(1);
 }, 10000);

 const oyen = document.querySelector(".oren").innerText;

 const cd = () => {
    setTimeout(() => {
        oyen = "9";
     }, 1000);
 }

 cd();