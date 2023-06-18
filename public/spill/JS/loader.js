let t1
let t2
let t3
let t4
let t5
//let t6

function timer() {
    t1 = setTimeout(splash1o, 1000)
    t2 = setTimeout(splash2o, 2000)
    t3 = setTimeout(splash3o, 3000)
    t4 = setTimeout(splash4o, 4000)
    t5 = setTimeout(splash5o, 5500)
    t6 = setTimeout(splash6o, 10000)
    t7 = setTimeout(splash7o, 11000)
}

function splash1o() {
    document.querySelector(".splash1").style.display = "block"
    document.querySelector(".wellc1").style.display = "none"
    document.querySelector(".wellc2").style.display = "block"
}

function splash2o() {
    document.querySelector(".splash2").style.display = "block"
}

function splash3o() {
    document.querySelector(".splash3").style.display = "block"
    document.querySelector(".wellc2").style.display = "none"
    document.querySelector(".wellc3").style.display = "block"
}

function splash4o() {
    document.querySelector(".splash4").style.display = "block"
}

function splash5o() {
    document.querySelector("#loader").style.background = "#3E549E"
    document.querySelector(".wellc3").style.display = "none"
    document.querySelector(".wellc4").style.display = "block"
}

function splash6o() {
    document.getElementById("loader").classList.add("load-dp")
}

function splash7o() {
    document.getElementById("loader").style.display = "none"
}