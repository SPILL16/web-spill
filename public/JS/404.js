const element = document.querySelector('.-wraper');
element.style.setProperty('--width', "100%");

setTimeout(() => {
    window.location.href = window.history.back(1);
 }, 10000);